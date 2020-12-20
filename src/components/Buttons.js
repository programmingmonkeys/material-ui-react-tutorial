import React from 'react'

import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

const Buttons = () => {
  return (
    <ButtonGroup color="primary" size="large" variant="contained">
      <Button startIcon={<SaveIcon />} onClick={() => alert('save')}>
        Save
      </Button>
      <Button endIcon={<DeleteIcon />} onClick={() => alert('delete')} color="secondary">
        Discard
      </Button>
    </ButtonGroup>
  )
}

export default Buttons
