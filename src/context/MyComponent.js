import React, { useContext } from 'react'
import { MyContext } from './RootContext'

const MyComponent = () => {
    const {text, setText} = useContext(MyContext);

  return (
    <div>
      <h3>{text}</h3>
      <button onClick={() => setText("Hello World!")}>
        Click me
      </button>
    </div>
  )
}

export default MyComponent