import React from 'react'
import { Provider } from 'react-redux'
import { ChatBox } from './Components/ChatBox'
import './App.css'
import { store } from './store'

export const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <div>App {process.env.name}</div>
        <div>
          <ChatBox />
        </div>
      </div>
    </Provider>
  )
}
