import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Header from "./layouts/header"
import About from "./pages/About"
import Board from "./pages/Board"
import BoardDetail from "./pages/BoardDetail"
import Main from './pages/Main'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

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
              <Route path="/board" element={<Board />} />
              {/* :id - 경로 변수 */}
              <Route path="/board/:id" element={<BoardDetail />} />
            </Routes>
          </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App