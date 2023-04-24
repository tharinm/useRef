
import { useState } from 'react'
import LearnRef from './layout/LearnRef'

export default function App() {

  const [isVisible,setIsVisible]=useState(false)

  return (
    <div>
      <button onClick={() => {
        setIsVisible(!isVisible)
      }} >Visible</button>
      {isVisible && <LearnRef />}
    </div>
  )
}
