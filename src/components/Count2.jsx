import { useState } from 'react'

const Count2 = () => {
  const [count2, setCount2] = useState(0)

  return (
    <div className='card'>
      <h1>{count2}</h1>
      <button onClick={() => setCount2(count2 + 1)}>Increment</button>
    </div>
  )
}

export default Count2
