import React, { useState } from 'react'

export const ChatBox = () => {
  const [count, setCount] = useState(0)

  const onClick = () => setCount((count) => count + 1)

  return (
    <div>
      <span>{count}</span>
      <button onClick={onClick}>Increase Count</button>
    </div>
  )
}
