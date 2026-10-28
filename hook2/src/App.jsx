import './App.css'
import UseRefEx from './components/UseRefEx'
import InputFocus from './components/InputFocus'
import Counter from './components/Counter'
import CountReducer from './hooks/CountReducer'
import BankReducer from './hooks/BankReducer'
import UserParent from './use_context/UserParent'
import CounterReducer from './apps/CounterReducer'
import ButtonSample from './styling/ButtonSample'
import Blocks from './styling/Blocks'

function App() {


  return (
    <>
      <div className='app'>
        {/* <UseRefEx />
        <InputFocus />
        <Counter />
        <CountReducer />
        <BankReducer />
        <UserParent />
        <CounterReducer /> */}
        {/* <ButtonSample /> */}
        <Blocks />
      </div>
    </>
  )
}

export default App
