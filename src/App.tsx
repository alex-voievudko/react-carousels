import { ThemeProvider } from './styles'
import { Carousel } from './components/Carousel-1/Carousel'

export const App = () => {
  return (
    <ThemeProvider>
      <Carousel />
    </ThemeProvider>
  )
}

export default App
