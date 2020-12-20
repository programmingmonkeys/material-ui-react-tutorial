import React from 'react'

import TextField from '@material-ui/core/TextField'

const Text = () => {
  return (
    <>
      <TextField
        variant="filled"
        color="secondary"
        type="email"
        label="Email"
        placeholder="test@test.com"
      />
      <TextField variant="outlined" color="secondary" type="date" />
    </>
  )
}

export default Text
