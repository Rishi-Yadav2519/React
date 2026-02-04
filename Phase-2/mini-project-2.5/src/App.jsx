import './App.css'
import Counter from './components/Counter'
import Header from './components/Header'
import { ThemeContextProvider } from './context/ThemeContext'

function App() {

  return (
    <ThemeContextProvider>
      <Header />
      <Counter />
    </ThemeContextProvider>
  )
}

export default App
