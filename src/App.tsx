import React from 'react'
import { ChatBox } from './Components/ChatBox'
import './App.css'

export const App = () => {
  return (
    <div className="container">
      <div>App {process.env.name}</div>
      <div>
        <ChatBox />
      </div>
    </div>
  )
}
