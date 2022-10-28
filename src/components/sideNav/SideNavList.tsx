import * as React from 'react'
import List from '@mui/material/List'
import ViewListIcon from '@mui/icons-material/ViewList'
import Divider from '@mui/material/Divider'
import LuggageIcon from '@mui/icons-material/Luggage'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useLocation, useNavigate } from 'react-router-dom'

function SideNavList({ open }: { open: boolean }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const navItems = [
    { title: 'Bucket List', path: 'bucketlist', icon: <ViewListIcon /> },
    { title: 'Trips', path: 'trips', icon: <LuggageIcon />},
  ]

  return (
    <List>
      {navItems.map((item) => (
        <ListItem
          key={item.path}
          disablePadding
          sx={{ display: 'block' }}
          onClick={() => navigate(item.path)}
        >
          <ListItemButton selected={pathname.includes(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
          <Divider />
        </ListItem>
      ))}
    </List>
  )
}

export default SideNavList
