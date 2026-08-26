import React, { useContext } from 'react'
import { counterContext } from '../context/context'

const Component = () => {
    const counter = useContext(counterContext);

  return (
    <div>
        {CSSMathValue.count}
    </div>
  )
}

export default Component