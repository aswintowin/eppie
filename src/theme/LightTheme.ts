import { createTheme } from '@mui/material/styles'

const Light = createTheme({
  direction: 'ltr',
  palette: {
    mode: 'light',
    primary: {
      main: '#53900F',
    },
    secondary: {
      main: '#3f6c0b',
    },
    tonalOffset: 0.2,
  },
  typography: {
    button: {
      textTransform: 'none',
    },
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
          marginBottom: '18px !important',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBlockEnd: '8px',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
         width: '100%'
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          display: 'flex',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {},
      },
    },
  },
})
export default Light
