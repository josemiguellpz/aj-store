import React from 'react';
import { ThemeProvider } from './Components/ThemeProvider';
import Index from './User/Index';
import './App.css';

function App() {

  return (
    <>
      <ThemeProvider>
        <Index/>
      </ThemeProvider>
    </>
  )
}

export default App
