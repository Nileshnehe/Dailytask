import { useReducer } from "react";

const initialState = { balance: 0, error: null }

const bankReducer = (state, action) => {
    switch (action.type) {
        case 'DEPOSIT':
            return { balance: state.balance + action.payload, error: null };
        case 'WITHDRAW':
            if (state.balance < action.payload) {
                return { ...state, error: "Insufficient Money" }
            }
            return { balance: state.balance - action.payload }
        default:
            return state


    }
}

const BankAccount = () => {

    const [state, dispatch] = useReducer(bankReducer, initialState)
    return (
        <div style={{ padding: '20px' }}>
            <h2>Balance: ₹{state.balance}</h2>
            {state.error && <p style={{ color: 'red' }}>{state.error}</p>}



            {/* 4. Dispatching actions (Handing forms to the teller) */}
            <button onClick={() => dispatch({ type: 'DEPOSIT', payload: 100 })}>
                Deposit ₹100
            </button>

            <button onClick={() => dispatch({ type: 'WITHDRAW', payload: 50 })}>
                Withdraw ₹50
            </button>

        </div>
    )
}

export default BankAccount