import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FetchAll from './components/FetchAll'
import FetchOneById from './components/FetchOneById'

function App() {

  return (
    <>
      <section id="center">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<FetchAll />} />
            <Route path='/:id' element={<FetchOneById />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
