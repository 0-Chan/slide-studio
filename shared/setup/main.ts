import { configs } from '@slidev/client'
import { watchEffect } from 'vue'

type Destination = { path: string; query: unknown; hash: string }
type Router = { beforeEach: (guard: (to: Destination) => unknown) => void }

export default function setupMain({ router }: { router: Router }) {
  watchEffect(() => {
    const theme = configs.themeConfig as { primary?: string; background?: string }
    const style = document.documentElement.style
    for (const [name, value] of [
      ['--studio-accent', theme.primary],
      ['--studio-background', theme.background],
    ]) {
      if (value) style.setProperty(name!, value)
      else style.removeProperty(name!)
    }
  })

  // Slidev 52.16.0 can include the build base inside hash routes (upstream #2630).
  // Keep the original project's fix for decks served under a prefix.
  const base = import.meta.env.BASE_URL
  if (base === '/') return
  const prefix = base.replace(/\/$/, '')
  router.beforeEach((to) => {
    if (to.path === prefix || to.path.startsWith(prefix + '/'))
      return { path: to.path.slice(prefix.length) || '/', query: to.query, hash: to.hash, replace: true }
  })
}
