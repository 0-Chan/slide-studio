#!/usr/bin/env node
import { spawn } from 'node:child_process'
import { mkdir, rm } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'
import { assertSlug, buildLocation, createDeck, deckEntry, listDecks } from './lib.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const [command, ...argv] = process.argv.slice(2)
const usage = '사용법:\n  pnpm new <slug>\n  pnpm dev [slug] [--port 3030] [--open]\n  pnpm build [slug] [--base /prefix/]\n  pnpm export <slug> [--format pdf|pptx] [--with-clicks]'

async function runSlidev(args) {
  const require = createRequire(import.meta.url)
  const cli = resolve(dirname(require.resolve('@slidev/cli/package.json')), 'bin', 'slidev.mjs')
  await new Promise((done, reject) => {
    const child = spawn(process.execPath, [cli, ...args], { cwd: root, stdio: 'inherit' })
    child.once('error', reject)
    child.once('exit', (code, signal) => {
      if (code === 0) done()
      else reject(new Error('Slidev 실행 실패 (' + (signal || code) + ')'))
    })
  })
}

async function main() {
  const allowed = {
    new: {},
    dev: { port: { type: 'string' }, open: { type: 'boolean' } },
    build: { base: { type: 'string' } },
    export: { format: { type: 'string' }, 'with-clicks': { type: 'boolean' } },
  }
  if (!(command in allowed)) throw new Error(usage)
  const { values, positionals } = parseArgs({
    args: argv,
    options: { ...allowed[command], help: { type: 'boolean', short: 'h' } },
    allowPositionals: true,
  })
  if (values.help) { console.log(usage); return }
  if (positionals.length > 1) throw new Error('한 번에 발표 이름 하나만 입력하세요.\n' + usage)
  const slug = positionals[0]

  if (command === 'new') {
    const destination = await createDeck(root, slug)
    console.log('발표 생성: ' + destination + '\n미리보기: pnpm dev ' + slug)
    return
  }
  if (command === 'dev') {
    const entry = await deckEntry(root, slug ?? 'example')
    const port = values.port ?? '3030'
    if (!/^\d+$/.test(port) || Number(port) < 1024 || Number(port) > 65535)
      throw new Error('--port는 1024~65535 범위의 숫자여야 합니다.')
    await runSlidev([entry, '--port', port, ...(values.open ? ['--open'] : [])])
    return
  }
  if (command === 'build') {
    const slugs = slug ? [assertSlug(slug)] : await listDecks(root)
    if (!slugs.length) throw new Error('빌드할 발표가 없습니다. pnpm new <slug>로 먼저 만드세요.')
    if (!slug) await rm(resolve(root, 'dist'), { recursive: true, force: true })
    for (const name of slugs) {
      const entry = await deckEntry(root, name)
      const { out, base } = buildLocation(root, name, values.base)
      console.log('발표 빌드: ' + name + ' → ' + base)
      // A fresh process keeps Slidev's cached entry root isolated per deck.
      await runSlidev(['build', entry, '--out', out, '--base', base, '--without-notes'])
    }
    return
  }
  const entry = await deckEntry(root, slug)
  const format = values.format ?? 'pdf'
  if (!['pdf', 'pptx'].includes(format)) throw new Error('--format은 pdf 또는 pptx를 지정하세요.')
  await mkdir(resolve(root, 'exports'), { recursive: true })
  await runSlidev([
    'export', entry, '--format', format, '--output', resolve(root, 'exports', slug + '.' + format),
    values['with-clicks'] ? '--with-clicks' : '--no-with-clicks',
  ])
}

main().catch(error => { console.error('\n' + error.message); process.exitCode = 1 })
