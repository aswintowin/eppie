import { observable, action, computed, reaction, makeAutoObservable } from 'mobx'
import { createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

export interface Trip {
  id?: string
  title: string
  note: string
  from: Date
  to: Date
}

class TripStore {
  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.trips,
      (_) => console.log(this.trips.length),
    )
  }

  @observable trips: Trip[] = [
    {
      id: uuidv4(),
      title: 'San Diego',
      note: 'Ani first birthday',
      from: new Date(),
      to: new Date(),
    },
    { id: uuidv4(), title: 'Atlanta', note: 'Las Vegas trip', from: new Date(), to: new Date() },
  ]

  @action addTrip = (trip: Trip) => {
    this.trips.push({ ...trip, id: uuidv4() })
  }

  @action removeTrip = (id: string) => {
    this.trips = this.trips.filter((trip) => trip.id !== id)
  }
}

export default createContext(new TripStore())
