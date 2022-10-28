import { Button } from '@mui/material'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  wrapper: {
    flexWrap: 'flex',
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    flexGrow: 1,
  },
  button: {
    float: 'right',
    margin: '18px !important',
  },
})

function PageTitle({ title, buttonText, handleButtonClick }: PageTitleProps) {
  const classes = useStyles()
  return (
    <>
      <div className={classes.wrapper}>
        <h2 className={classes.title} id='parent-modal-title'>
          {title}
        </h2>
        <Button
          className={classes.button}
          variant='outlined'
          color='secondary'
          onClick={handleButtonClick}
        >
          {buttonText}
        </Button>
      </div>
    </>
  )
}

interface PageTitleProps {
  title: string
  handleButtonClick: () => void
  buttonText: string
}
export default PageTitle
