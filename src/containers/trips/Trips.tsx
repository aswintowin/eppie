import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import PageTitle from '../../components/pageTitle/PageTitle'
import TripsStore from '../../stores/TripsStore'
import { Card, CardContent, Typography, CardActions, Button, Grid, Box, Modal } from '@mui/material'
import AddTrip from './AddTrip'

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

function Trips() {
  const tripsStore = useContext(TripsStore)
  const [open, setOpen] = useState(false)
  const { trips } = tripsStore
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <PageTitle title='Trips' buttonText='Add Trip' handleButtonClick={handleOpen} />
      <Grid sx={{ pt: 2 }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {trips.map((trip) => (
          <Card variant='elevation' sx={{ margin: 1, maxWidth: '350px' }} key={trip.id}>
            <CardContent>
              <Typography sx={{ fontSize: 16, fontWeight: 500 }} color='primary'>
                {trip.title}
              </Typography>
              <Typography sx={{ fontSize: 12, mb: 1 }}>
                {trip.from.toLocaleDateString()} - {trip.to.toLocaleDateString()}
              </Typography>

              <Typography variant='body2' sx={{ fontSize: 12}}>{trip.note}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <AddTrip handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  )
}

export default observer(Trips)
