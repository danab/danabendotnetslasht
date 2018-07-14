import Typography from 'typography'
import sutroTheme from 'typography-theme-sutro'

sutroTheme.overrideThemeStyles = () => ({
  'ul,ol': {
    marginLeft: '1.78rem',
  },
})

const typography = new Typography(sutroTheme)

export default typography
