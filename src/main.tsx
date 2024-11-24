import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "./index.css";
import router from "./components/routes";
import "./i18n/i18n";

const theme = extendTheme({
  fonts: {
    heading: "'Courier New', sans-serif", // Example for headings
    body: "'Roboto', sans-serif", // Example for body text
    mono: "'Courier New', monospace", // Example for code/monospace text
  },
});

export default theme;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
