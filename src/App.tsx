import './App.css'
import Barcode from 'react-barcode'
import { useState, useRef, useEffect } from 'react'
import { List } from './components/List'
import { Logo } from './assets/logo'




function App() {

  return (
    <>
      <div className="App">
        <Logo></Logo>
        <h2>Gerador de código de Barras</h2>
        <List></List>
      </div>
    </>
  )
}

export default App
