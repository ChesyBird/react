import './App.css'
import CountReducer from './components/CountReducer'
import InputFocus from './components/InputFocus'
import UseRefEx from './components/UseRefEx'

function App() {


  return (
    <>
      <div className='app'>
        <UseRefEx />
        <InputFocus />
        <CountReducer />
      </div>
    </>
  )
}

export default App
