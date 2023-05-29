import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  return (
    <StyledThemeProvider theme={{}}>
      <Reset />
      {children}
    </StyledThemeProvider>
  )
}
