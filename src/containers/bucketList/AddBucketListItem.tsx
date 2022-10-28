import React, { useContext, useState } from 'react'
import TodoStore from '../../stores/TodoStore'
import { observer } from 'mobx-react-lite'
import { Button, TextField } from '@mui/material'

const AddBucketListItem = ({handleClose}: AddBucketListItemrops) => {
  const [title, setTitle] = useState('')
  const todoStore = useContext(TodoStore)
  const { addTodo } = todoStore

  const handleAddClick = () => {
    setTitle('')
    addTodo({
      title: title,
      completed: false,
    })
  }

  return (
    <>
      <h3 id='parent-modal-title'>Add Item</h3>
      <div className='form-group'>
        <TextField
          id='outlined-read-only-input'
          label='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='form-group-buttons'>
        <Button variant='outlined' color='secondary' onClick={handleClose}>
          Cancel
        </Button>
        <Button variant='contained' onClick={handleAddClick}>
          Add Todo
        </Button>
      </div>
    </>
  )
}

interface AddBucketListItemrops {
  handleClose: () => void
}

export default observer(AddBucketListItem)
