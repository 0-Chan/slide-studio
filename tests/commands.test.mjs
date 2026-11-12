import assert from 'node:assert/strict'
import { mkdtemp, mkdir, readFile, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { resolve } from 'node:path'
import test from 'node:test'
import { buildLocation, createDeck, deckEntry, listDecks } from '../scripts/lib.mjs'

async function fixture() {
  const root = await mkdtemp(resolve(tmpdir(), 'studio-test-'))
  await mkdir(resolve(root, 'templates/deck/public'), { recursive: true })
  await writeFile(resolve(root, 'templates/deck/slides.md'), '---\ntitle: __TITLE__\n---\n# __TITLE__\n')
  await writeFile(resolve(root, 'templates/deck/public/image.svg'), '<svg/>')
  return root
}

test('new deck copies assets, fills title, and refuses to overwrite edits', async () => {
  const root = await fixture()
  await createDeck(root, 'first-talk')
  assert.match(await readFile(await deckEntry(root, 'first-talk'), 'utf8'), /title: first-talk/)
  assert.equal(await readFile(resolve(root, 'decks/first-talk/public/image.svg'), 'utf8'), '<svg/>')
  await writeFile(await deckEntry(root, 'first-talk'), '# Edited by author\n')
  await assert.rejects(createDeck(root, 'first-talk'), /이미 존재/)
  assert.equal(await readFile(await deckEntry(root, 'first-talk'), 'utf8'), '# Edited by author\n')
})

test('discovery selects valid decks and rejects invalid or missing names', async () => {
  const root = await fixture()
  await createDeck(root, 'z-talk')
  await createDeck(root, 'a-talk')
  await mkdir(resolve(root, 'decks/assets'))
  assert.deepEqual(await listDecks(root), ['a-talk', 'z-talk'])
  await assert.rejects(createDeck(root, '../escape'), /발표 이름/)
  await assert.rejects(createDeck(root, 'Bad Name'), /발표 이름/)
  await assert.rejects(deckEntry(root, 'missing'), /발표를 찾을 수 없습니다/)
})

test('build outputs stay separate and base prefixes cannot escape their URL path', () => {
  const root = '/studio'
  assert.deepEqual(buildLocation(root, 'first'), { out: '/studio/dist/first', base: '/first/' })
  assert.deepEqual(buildLocation(root, 'second', '/talks/'), { out: '/studio/dist/second', base: '/talks/second/' })
  assert.throws(() => buildLocation(root, 'first', '/../'), /URL 경로/)
  assert.throws(() => buildLocation(root, 'first', 'https://example.com'), /URL 경로/)
})
