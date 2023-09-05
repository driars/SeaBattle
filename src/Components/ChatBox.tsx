import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks'
import { increment, selectCount } from '../reducers/counter/counterSlice'

export const ChatBox = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>Increase Count</button>
    </div>
  )
}
