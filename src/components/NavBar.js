import React from 'react'

import Typography from '@material-ui/core/Typography'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import Button from '@material-ui/core/Button'

const NavBar = () => {
  return (
    // <AppBar color="secondary">
    //   <ToolBar style={{ justifyContent: 'space-between', alignItems: 'center' }}>
    //     <IconButton style={{ justifyContent: 'flex-start' }}>
    //       <MenuIcon />
    //     </IconButton>
    //     <Typography style={{ justifyContent: 'flex-start' }} variant="h6">
    //       MUI Theme
    //     </Typography>
    //     <Button>Login</Button>
    //   </ToolBar>
    // </AppBar>

    // <AppBar color="secondary">
    //   <ToolBar>
    //     <IconButton>
    //       <MenuIcon />
    //     </IconButton>
    //     <Typography style={{ flex: 1 }} variant="h6">
    //       MUI Theme
    //     </Typography>
    //     <Button>Login</Button>
    //   </ToolBar>
    // </AppBar>

    // <AppBar color="secondary">
    //   <ToolBar style={{ justifyContent: 'space-between' }}>
    //     <IconButton>
    //       <MenuIcon />
    //     </IconButton>
    //     <Typography variant="h6">Foobar</Typography>
    //     <Button>Login</Button>
    //   </ToolBar>
    // </AppBar>

    <AppBar color="secondary">
      <ToolBar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Foobar</Typography>
        <Button style={{ marginLeft: 'auto' }}>Login</Button>
      </ToolBar>
    </AppBar>
  )
}

export default NavBar
