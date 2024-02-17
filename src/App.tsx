import { Grid, GridItem } from '@chakra-ui/react'

import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <Grid templateAreas={`"header" "main" "footer"`}>
      <GridItem bg={"black"} area={'header'}><NavBar /></GridItem>
      <GridItem bg={"blue"} area={'main'}>Main</GridItem>
      <GridItem area={'footer'}><Footer /></GridItem>
    </Grid>
  )
}

export default App
