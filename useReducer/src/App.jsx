import BankAccount from './component/BankAccount'
import ExpensiveComponent from './useMemo/ExpensiveComponent'

const App = () => {
  return (
    <div>App
      {/* <BankAccount /> */}

      <ExpensiveComponent/>
    </div>
  )
}

export default App