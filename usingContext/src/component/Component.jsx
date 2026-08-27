import React, { useContext } from 'react'
import { counterContext } from '../context/context'

const Component = () => {
    const values = useContext(counterContext);

  return (
    <div>
        {values.count}
    </div>
  )
}

export default Component