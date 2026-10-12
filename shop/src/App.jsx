import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './layouts/Header';
import Main from './layouts/Main';
import ProductList from "./products/ProductList";

function App() {

  return (
    <>
      <section className='app'>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path="/products" element={<ProductList />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
