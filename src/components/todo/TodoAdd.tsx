import React, { useContext, useState } from 'react'
import TodoStore from '../../stores/TodoStore'
import { observer } from 'mobx-react-lite'
import { Button } from 'react-bootstrap'

const AddTodo = () => {
  const [title, setTitle] = useState('')
  const todoStore = useContext(TodoStore)
  const { addTodo, info } = todoStore

  return (
    <>
      <div className='alert alert-primary'>
        <div className='d-inline col-4'>
          Total items: &nbsp;
          <span className='badge badge-info'>{info.total}</span>
        </div>
        <div className='d-inline col-4'>
          Finished items: &nbsp;
          <span className='badge badge-info'>{info.completed}</span>
        </div>
        <div className='d-inline col-4'>
          Unfinished items: &nbsp;
          <span className='badge badge-info'>{info.notCompleted}</span>
        </div>
      </div>
      <div className='form-group'>
        <input
          className='form-control'
          type='text'
          value={title}
          placeholder='Todo title...'
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <Button
          onClick={(_) => {
            addTodo({
              title: title,
              completed: false,
            })
            setTitle('')
          }}
          variant='dark'
        >
          Add Todo
        </Button>
      </div>
    </>
  )
}

export default observer(AddTodo)
