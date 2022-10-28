import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { Box, Modal } from '@mui/material'

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

function CommonModal({ children, onClose }: ModalProps) {
  
  return (
    <Modal
      open
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        {children}
      </Box>
    </Modal>
  )
}

interface ModalProps {
  children: ReactJSXElement
  onClose: () => void
}
export default CommonModal
