import React, { useContext } from 'react'
import TodoStore from '../../stores/TodoStore'
import { observer } from 'mobx-react-lite'
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'

const BucketListTable = () => {
  const todoStore = useContext(TodoStore)
  const { todos, toggleTodo, removeTodo } = todoStore;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Completed</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((row) => (
            <TableRow key={row.title}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.completed ? '✅' : ''}</TableCell>
              <TableCell>
                <Button color="secondary" variant='outlined' onClick={() => toggleTodo(row.id!)}>
                  Toggle
                </Button>
                <Button variant='contained' onClick={() => removeTodo(row.id!)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default observer(BucketListTable)
