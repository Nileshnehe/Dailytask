import { useState } from 'react'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

 


  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
    // setCount(prevCount => prevCount + 1)

  }
  return (
    <>

      <button
        onClick={handleIncrement}

      >Inc</button>

      count is {count}

<div>
  
<Button  count={count}/>
</div>

    </>
  )
}

export default App
