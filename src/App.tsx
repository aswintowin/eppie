import React from 'react'
import './App.scss'
import { observer } from 'mobx-react-lite'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Todo from './containers/bucketList/BucketList'
import { ThemeProvider } from '@mui/system'
import Themes from './theme'
import SideNav from './components/sideNav/SideNav'
import Trips from './containers/trips/Trips'

function App() {
  const [isDarkEnabled, setIsDarkEnabled] = React.useState(
    localStorage.getItem('isDarkEnabled') === 'true',
  )
  const changeTheme = () => {
    const newState = !isDarkEnabled
    setIsDarkEnabled(newState)
    localStorage.setItem('isDarkEnabled', newState.toString())
  }

  return (
    <ThemeProvider theme={isDarkEnabled ? Themes.dark : Themes.light}>
      <BrowserRouter>
        <SideNav onToggle={changeTheme} checked={isDarkEnabled}>
          <div className='ContentMain'>
            <Routes>
              <Route path='/bucketlist' element={<Todo />} />
              <Route path='/trips' element={<Trips />} />
            </Routes>
          </div>
        </SideNav>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default observer(App)
