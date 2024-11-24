import { Grid, GridItem } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import useLocalizeDocumentAttributes from "./i18n/useLocalizeDocumentAttributes";
import navBarActiveContext from "./state-management/Contexts/NavBarActiveContext";

function App() {
  const [active, setActive] = useState("home");

  useLocalizeDocumentAttributes();

  return (
    <Grid
      templateAreas={`"nav" "main" "footer"`}
      templateRows="auto 1fr auto"
      minHeight="100vh"
    >
      <navBarActiveContext.Provider value={{ active, setActive }}>
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <GridItem area={"main"}>
          <Outlet />
        </GridItem>
        <GridItem area={"footer"}>
          <Footer />
        </GridItem>
      </navBarActiveContext.Provider>
    </Grid>
  );
}

export default App;
