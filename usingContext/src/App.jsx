import { useEffect, useState } from 'react'
import './App.css'
import { counterContext } from './context/context'
import Component from './component/Component'

function App() {
  const [count, setCount] = useState(()=> {
    const savedCount = localStorage.getItem('myCount')
    return savedCount ? parseInt(savedCount, 10) : 0;
  }) 

  
  useEffect(() => {
    localStorage.setItem('myCount', count.toString())
  }, [count])

  return (
    <>
      <counterContext.Provider value={{count, setCount}}>

        <Component />
        <button onClick={() => setCount(count + 1)}>Inc</button>
        <button onClick={() => setCount(0)}>Del</button>
      </counterContext.Provider>
    </>
  )
}

export default App
