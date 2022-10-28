import { createTheme } from '@mui/material/styles'

const Dark = createTheme({
  direction: 'ltr',
  palette: {
    mode: 'dark',
    primary: {
      main: '#53900F',
    },
    secondary: {
      main: '#edfbdd',
    },
    tonalOffset: 0.2,
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          margin: '0 8px 0 0',
        },
      },
    },
    MuiFormControl: { 
      styleOverrides: {
        root: {
          width: '100%',
        }
      }
    }, 
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBlockEnd: '8px',
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          display: 'flex',
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          textAlign: 'left'
        }
      }
    },
  },
})
export default Dark
