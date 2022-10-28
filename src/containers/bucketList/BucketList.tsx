import React from 'react'
import TodoList from './BucketListTable'
import AddBucketListItem from './AddBucketListItem'
import { Box, Modal } from '@mui/material'
import PageTitle from '../../components/pageTitle/PageTitle'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  padding: 2,
  borderRadius: 2,
}

function BucketList() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <PageTitle title='Bucket List' buttonText='Add Item' handleButtonClick={handleOpen} />
      <TodoList />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <AddBucketListItem handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  )
}

export default BucketList
