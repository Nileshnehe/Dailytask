import { useReducer } from "react";

const App = () => {

  const reducer = (state, action) => {

    

    if (action.type === "Inc") {
      return state + 1
    };

    if (action.type === "Dec") {
      return state - 1;
    };

    console.log(state, action)
  };

  const [count, dispatch] = useReducer(reducer, 0)
  console.log(useReducer(reducer, 0))

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "Inc" })}>Inc</button>

      <button onClick={() => dispatch({ type: "Dec" })}>Dec</button>
    </>
  )

}

export default App