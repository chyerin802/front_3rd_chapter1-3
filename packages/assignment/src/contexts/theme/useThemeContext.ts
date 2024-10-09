import { useContext } from 'react'
import ThemeContext from './ThemeContext'

// 커스텀 훅: useAppContext
const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useThemeContext must be used within an ThemeProvider')
  }
  return context
}

export default useThemeContext
