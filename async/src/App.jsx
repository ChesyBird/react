import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FetchAll from './components/FetchAll'
import FetchOneById from './components/FetchOneById'
import AxiosTodos from './axios_ex/AxiosTodos'
import AxiosTodoById from './axios_ex/AxiosTodoById'

function App() {

  return (
    <>
      <section id="center">
        <BrowserRouter>
          <Routes>
            {/* fetch방식 */}
            {/* <Route path='/' element={<FetchAll />} />
            <Route path='/:id' element={<FetchOneById />} /> */}

            {/* axios방식 */}
            <Route path='/' element={<AxiosTodos />} />
            <Route path='/axios/:id' element={<AxiosTodoById />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
