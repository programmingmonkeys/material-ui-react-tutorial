import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    marginBottom: 15,
    padding: '5px 30px',
  },
})

const ButtonStyled = () => {
  const { root: styled } = useStyles()

  return <Button className={styled}>Test Styled Button</Button>
}

export default ButtonStyled
