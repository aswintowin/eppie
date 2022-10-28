import { observable, action, reaction, makeAutoObservable } from 'mobx'
import { createContext } from 'react'
import { v4 as uuidv4 } from 'uuid'

export enum TripType {
  RoadTrip = 1,
  Flight = 0,
}

export interface Trip {
  id?: string
  title: string
  note: string
  from: Date
  to: Date
  ref: string
  type: TripType
}

class TripStore {
  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.trips,
      () => console.log(this.trips.length),
    )
  }

  @observable trips: Trip[] = [
    {
      id: uuidv4(),
      title: 'San Diego',
      note: 'Ani first birthday',
      from: new Date(),
      to: new Date(),
      ref: '',
      type: 0
    },
    { id: uuidv4(), title: 'Boston', note: 'Las Vegas trip', from: new Date(), to: new Date(), type: 1, ref: 'AcYSjRiNxnroa5lrqL5atmWWOnkjYsiFZgHEOsuXbk92-gDOduOLtBw0uCU8d5XmPJKRolhK6-qjVBTaXOLWsayCE9DCBAHt64sTd-1V8MUEcqaeYiLI9lKux9WB9nHF5bsjDB38d3pC7n57Mk3TsbETL83u_TRDvr17xRxgnGA_SWm9gwwI' },
  ]

  @action addTrip = (trip: Trip) => {
    this.trips.push({ ...trip, id: uuidv4() })
  }

  @action removeTrip = (id: string) => {
    this.trips = this.trips.filter((trip) => trip.id !== id)
  }
}

export default createContext(new TripStore())
