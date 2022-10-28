import React from 'react'
import './App.scss'
import NavBar from './components/navbar/NavBar'
import { observer } from 'mobx-react-lite'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Todo from './components/todo/Todo'

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default observer(App)
