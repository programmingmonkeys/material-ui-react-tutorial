import React, { useState } from 'react'

import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

const CheckBox = () => {
  const [checked, setChecked] = useState(true)

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={e => setChecked(e.target.checked)}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      }
      label="Testing Checkbox"
    />
  )
}

export default CheckBox
