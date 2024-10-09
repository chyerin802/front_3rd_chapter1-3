import { createContext } from 'react'

// AppContext 타입 정의
export interface ThemeContextType {
  theme: string
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
export default ThemeContext
