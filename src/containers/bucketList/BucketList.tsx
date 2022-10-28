import React from 'react'
import TodoList from './BucketListTable'
import AddBucketListItem from './AddBucketListItem'
import { CommonModal, PageTitle } from '../../components'

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
      {open ? (
        <CommonModal onClose={handleClose}>
          <AddBucketListItem handleClose={handleClose} />
        </CommonModal>
      ) : null}
    </>
  )
}

export default BucketList
