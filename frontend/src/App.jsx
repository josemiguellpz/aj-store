import React from 'react';
import { ThemeProvider } from './Components/ThemeProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Index from './User/Index';
import Products from './User/Products';
import './App.css';

function App() {

  return (
    <>
      <ThemeProvider>
        <Router>
          <NavBar/>
            <Routes>
              <Route path='/' element={ <Index/> } />
              <Route path='/products' element={ <Products/> } />
              {/* <Route path='/login' element={ <Login/> } /> */}
            </Routes>
          <Footer/>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
