import React, { useContext, useState } from 'react'

import dayjs from 'dayjs'
import { observer } from 'mobx-react-lite'
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import TripsStore, { TripType } from '../../stores/TripsStore'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { getPictureReference } from '../../google/Pictures'

const AddTrip = ({ handleClose }: AddTripProps) => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [type, setType] = useState('')
  const [from, setFrom] = useState<Date>(new Date())
  const [to, setTo] = useState<Date>(new Date())
  const tripsStore = useContext(TripsStore)
  const { addTrip } = tripsStore

  const handleAddClick = async () => {
    addTrip({
      title: title,
      note: note,
      from: from,
      to: to,
      type: TripType.RoadTrip,
      ref: await getPictureReference(title),
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
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Mode</InputLabel>
            <Select value={type} label='Mode' onChange={(e) => setType(e.target.value)}>
              <MenuItem value={TripType.Flight}>Flight</MenuItem>
              <MenuItem value={TripType.RoadTrip}>Roadtrip</MenuItem>
            </Select>
          </FormControl>
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
