import { cp, mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

export function assertSlug(slug) {
  if (typeof slug !== 'string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))
    throw new Error('발표 이름은 영문 소문자·숫자·하이픈으로 입력하세요. 예: my-talk')
  return slug
}

export async function deckEntry(root, slug) {
  const entry = resolve(root, 'decks', assertSlug(slug), 'slides.md')
  if (!(await stat(entry).catch(() => null))?.isFile())
    throw new Error('발표를 찾을 수 없습니다: ' + slug + '. pnpm new ' + slug + ' 명령으로 먼저 만드세요.')
  return entry
}

export async function listDecks(root) {
  const entries = await readdir(resolve(root, 'decks'), { withFileTypes: true })
    .catch(error => { if (error.code === 'ENOENT') return []; throw error })
  const decks = []
  for (const item of entries) {
    if (!item.isDirectory() || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.name)) continue
    if ((await stat(resolve(root, 'decks', item.name, 'slides.md')).catch(() => null))?.isFile())
      decks.push(item.name)
  }
  return decks.sort()
}

export async function createDeck(root, slug) {
  assertSlug(slug)
  const template = resolve(root, 'templates', 'deck')
  const markdown = await readFile(resolve(template, 'slides.md'), 'utf8')
  await mkdir(resolve(root, 'decks'), { recursive: true })
  const destination = resolve(root, 'decks', slug)
  try {
    // Reserve the destination before copying, so existing decks are never merged or replaced.
    await mkdir(destination)
  } catch (error) {
    if (error.code === 'EEXIST') throw new Error('이미 존재하는 발표입니다: ' + slug)
    throw error
  }
  // The directory is empty and exclusively ours. errorOnExist would treat that
  // reservation as a conflict on current Node.js.
  await cp(template, destination, { recursive: true })
  await writeFile(resolve(destination, 'slides.md'), markdown.replaceAll('__TITLE__', slug))
  return destination
}

export function buildLocation(root, slug, prefix = '/') {
  assertSlug(slug)
  const basePrefix = '/' + prefix.replace(/^\/+|\/+$/g, '')
  const normalized = basePrefix === '/' ? '/' : basePrefix + '/'
  if (!/^\/(?:[a-zA-Z0-9._~-]+\/)*$/.test(normalized) || normalized.split('/').includes('..'))
    throw new Error('--base에는 /talks/ 같은 URL 경로만 사용할 수 있습니다.')
  return { out: resolve(root, 'dist', slug), base: normalized + slug + '/' }
}
