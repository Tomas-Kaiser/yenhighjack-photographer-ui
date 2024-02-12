import { Grid, GridItem } from '@chakra-ui/react'

import './App.css'
import NavBar from './components/NavBar'

function App() {

  return (
    <Grid templateAreas={`"header" "main" "footer"`}>
      <GridItem bg={"black"} area={'header'}><NavBar /></GridItem>
      <GridItem bg={"blue"} area={'main'}>Main</GridItem>
      <GridItem bg={"gold"} area={'footer'}>Footer</GridItem>
    </Grid>
  )
}

export default App
