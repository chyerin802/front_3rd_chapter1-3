import { useContext } from 'react'
import NotificationContext from './NotificationContext'

// 커스텀 훅: useAppContext
const useNotificationContext = () => {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error(
      'useNotificationContext must be used within an NotificationProvider'
    )
  }
  return context
}

export default useNotificationContext
