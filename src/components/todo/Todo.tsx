import React from 'react'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import { observer } from 'mobx-react-lite'

function Todo() {
  return (
    <>
      <TodoAdd />
      <TodoList />
    </>
  )
}

export default observer(Todo)
