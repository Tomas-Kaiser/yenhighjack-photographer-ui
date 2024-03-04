import { Grid, GridItem } from '@chakra-ui/react'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <Grid templateAreas={`"nav" "main" "footer"`}
      templateRows="auto 1fr auto"
      minHeight="100vh">
      <GridItem area={'nav'}><NavBar /></GridItem>
      <GridItem area={'main'}><Outlet /></GridItem>
      <GridItem area={'footer'}><Footer /></GridItem>
    </Grid>
  )
}

export default App
