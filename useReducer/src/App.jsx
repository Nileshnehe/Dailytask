import { useReducer } from 'react';

const initialState = 0;

function App() {
  const reducer = (state, action) => {
    // Standard practice: check action.type
    switch (action.type) { 
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      default:
        // You can print the invalid action type in the error console to see exactly what failed
        throw new Error(`Unexpected action type: ${action.type}`);
    }
  }

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h1>count is : {count}</h1>
      {/* Pass an object instead of a string */}
      <button onClick={() => dispatch({ type: "add" })}>Inc</button>
      <button onClick={() => dispatch({ type: "sub" })}>Dec</button>
      
      {/* Testing button to trigger error */}
      <button onClick={() => dispatch({ type: "broken_action" })}>Trigger Error</button>
    </>
  )
}

export default App;
