import React, { useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import TripsStore, { TripType } from '../../stores/TripsStore'
import FlightIcon from '@mui/icons-material/Flight'
import { Card, CardContent, Typography, Grid } from '@mui/material'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import AddTrip from './AddTrip'
import { CommonModal, PageTitle } from '../../components'
import { createStyles, makeStyles } from '@mui/styles'

const useStyles = makeStyles(() =>
  createStyles({
    image: {
      width: '200px',
      marginBottom: '10px',
      height: '150px',
    },
  }),
)

function Trips() {
  const tripsStore = useContext(TripsStore)
  const classes = useStyles()
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
              {trip.ref !== '' ? (
                <img
                  className={classes.image}
                  src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${trip.ref}&key=AIzaSyB5rZvPMZwIyFA1ZIvV2LStzYuDjkDzzSE&maxwidth=200&maxheight=150`}
                />
              ) : (
                <img
                  className={classes.image}
                  src='https://webhostingmedia.net/wp-content/uploads/2018/01/http-error-404-not-found.png'
                  loading='lazy'
                />
              )}
              <Typography sx={{ fontSize: 16, fontWeight: 500 }} color='primary'>
                {trip.type === TripType.Flight ? (
                  <FlightIcon sx={{ fontSize: 16, mr: 0.5 }} />
                ) : (
                  <DirectionsCarIcon sx={{ fontSize: 16,  mr: 0.5  }}/>
                )}
                {trip.title}
              </Typography>
              <Typography sx={{ fontSize: 12, mb: 1 }}>
                {trip.from.toLocaleDateString()} - {trip.to.toLocaleDateString()}
              </Typography>

              <Typography variant='body2' sx={{ fontSize: 12 }}>
                {trip.note}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
      {open ? (
        <CommonModal onClose={handleClose}>
          <AddTrip handleClose={handleClose} />
        </CommonModal>
      ) : null}
    </>
  )
}

export default observer(Trips)
