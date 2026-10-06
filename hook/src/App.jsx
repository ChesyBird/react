import './App.css'
import Drinks from './components/Drinks'
import Test01 from './tests/Test01'
import Test02 from './tests/Test02'

function App() {

  return (
    <>
      <div className='app'>
        <h2>리엑트 상태 관리</h2>
        {/* <Counter /> */}
        {/* <InputValue /> */}
        <Drinks />
        <Test01 />
        <Test02 />
      </div>
    </>
  )
}

export default App
