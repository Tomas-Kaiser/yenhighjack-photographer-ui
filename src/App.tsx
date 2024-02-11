import { Grid, GridItem, Text } from '@chakra-ui/react'

import './App.css'

function App() {

  return (
    <Grid templateAreas={`"header" "main" "footer"`}>
      <GridItem bg={"red"} area={'header'}>Header</GridItem>
      <GridItem bg={"blue"} area={'main'}>Main</GridItem>
      <GridItem bg={"gold"} area={'footer'}>Footer</GridItem>
    </Grid>
  )
}

export default App
