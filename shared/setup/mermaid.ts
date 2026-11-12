import { configs } from '@slidev/client'

export default function setupMermaid() {
  const dark = configs.colorSchema !== 'light'
  const primary = (configs.themeConfig as { primary?: string }).primary
    || (dark ? '#f5a524' : '#b45309')
  return {
    theme: 'base',
    themeVariables: {
      darkMode: dark,
      primaryColor: dark ? '#27272a' : '#ffffff',
      primaryTextColor: dark ? '#f4f4f5' : '#18181b',
      primaryBorderColor: primary,
      lineColor: primary,
      secondaryColor: dark ? '#18181b' : '#f4f4f5',
      tertiaryColor: dark ? '#27272a' : '#fafafa',
      edgeLabelBackground: dark ? '#18181b' : '#ffffff',
      fontFamily: 'IBM Plex Sans KR, sans-serif',
      fontSize: '18px',
    },
  }
}
