import React, { useMemo, useState } from 'react'


const num = new Array(30_000_000).fill(0).map((_, i) => {
    return {
        index: i,
        isMagical: i === 10_000_000
    }
});
const ExpensiveComponent = () => {
    const [count, setCount] = useState(0);
    const [numbers, setNumbers] = useState(num)


    //  const magical = numbers.find(item => item.isMagical === true) //{This is without useMemo}
    const magical = useMemo(() => numbers.find(item => item.isMagical === true), [numbers]);
    return (
        <div>
            <h2>{magical.index}</h2>

            <p>Count is: {count}</p>
            <button onClick={() => setCount(count + 1)}>inc</button>
        </div>
    )
}

export default ExpensiveComponent