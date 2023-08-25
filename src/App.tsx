import React from 'react'
import { ChatBox } from './Components/ChatBox'

export const App = () => {
  return (
    <div>
      <div>App {process.env.name}</div>
      <div>
        <ChatBox />
      </div>
    </div>
  )
}
