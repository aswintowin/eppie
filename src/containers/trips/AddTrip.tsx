import React, { useContext, useState } from 'react'

import dayjs from 'dayjs'
import { observer } from 'mobx-react-lite'
import { Button, TextField } from '@mui/material'
import TripsStore from '../../stores/TripsStore'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

const AddTrip = ({ handleClose }: AddTripProps) => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [from, setFrom] = useState<Date>(new Date())
  const [to, setTo] = useState<Date>(new Date())
  const tripsStore = useContext(TripsStore)
  const { addTrip } = tripsStore

  const handleAddClick = () => {
    setTitle('')
    addTrip({
      title: title,
      note: note,
      from: from,
      to: to,
    })
    handleClose()
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <h3 id='parent-modal-title'>Add Trip</h3>
        <div className='form-group'>
          <TextField
            id='outlined-read-only-input'
            label='Where'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <DesktopDatePicker
            label='Start'
            value={from}
            minDate={dayjs('2000-01-01')}
            onChange={(newValue) => {
              newValue && setFrom(newValue.toDate())
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <div className='form-group'>
          <DesktopDatePicker
            label='End'
            value={to}
            minDate={dayjs(from)}
            onChange={(newValue) => {
              newValue && setTo(newValue.toDate())
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <div className='form-group'>
          <TextField
            id='outlined-read-only-input'
            label='Note'
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className='form-group-buttons'>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='contained' onClick={handleAddClick}>
            Add Trip
          </Button>
        </div>
      </LocalizationProvider>
    </>
  )
}
interface AddTripProps {
  handleClose: () => void
}

export default observer(AddTrip)
