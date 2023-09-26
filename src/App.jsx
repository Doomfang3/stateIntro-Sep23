import { Fragment, useState } from 'react'
import './App.css'
import { v4 as uuidv4 } from 'uuid'
import ListItem from './components/ListItem'
import Count2 from './components/Count2'

const arr = [{ label: 'Hey' }, { label: 'There' }, { label: 'Hello' }, { label: 'Hey' }]

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hey')
  const [myArr, setMyArr] = useState(
    arr.map(currentElement => ({ ...currentElement, id: uuidv4() }))
  )

  const handleClick = () => {
    setCount(count + 1)
  }

  const returnBtn = () => {
    if (count % 2 === 0) {
      return <button onClick={() => handleClick()}>Increment</button>
    } else {
      return <button onClick={handleClick}>Increment Bis</button>
    }
    /* 
    count % 2 === 0 
    ? 
    <button onClick={() => handleClick()}>Increment</button> 
    : 
    <button onClick={handleClick}>Increment Bis</button>
    */
  }

  if (count % 3 === 0) {
    return (
      <>
        <h1>{count}</h1>
        <button onClick={() => handleClick()}>Increment</button>
      </>
    )
  } else {
    return (
      <>
        {message}
        <div className='card'>
          <h1>{count}</h1>
          {returnBtn()}
        </div>
        <Count2 />
        <h2>Something</h2>
        {count % 2 === 0 &&
          myArr.map(currentElement => (
            <Fragment key={currentElement.id}>
              <ListItem item={currentElement.label} />
              <h3>SOme reason</h3>
            </Fragment>
          ))}

        {/* if (count % 2 === 0) {
                myArr.map(currentElement => (
                  <ListItem key={currentElement.id} item={currentElement.label} />
            ))}
          } */}
      </>
    )
  }
}

export default App
