import React from 'react'
import logo from './logo.svg'
import './App.css'

// theme
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors'
import 'fontsource-roboto'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

// Components
import NavBar from './components/NavBar'
import ButtonStyled from './components/ButtonStyled'
import TextField from './components/Text'
import CheckBox from './components/CheckBox'
import Buttons from './components/Buttons'

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
  // palette: {
  //   primary: {
  //     main: green[500],
  //   },
  //   secondary: {
  //     main: orange[500],
  //   },
  // },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div className="App">
          <header className="App-header">
            <NavBar />
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">Learn how to use Material UI</Typography>
            <ButtonStyled />
            <TextField />
            <Grid container spacing={2} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
              <Grid item xs={3} lg={12}>
                <Paper style={{ height: 75, width: '100%' }} />
              </Grid>
            </Grid>
            <CheckBox />
            <Buttons />
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
