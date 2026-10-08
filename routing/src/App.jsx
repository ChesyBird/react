import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Header from "./layouts/header"
import Main from './pages/Main'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from "./pages/About"

function App() {


  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header />

          <div className='content'>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App