import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import LandingPage from "./LandingPage";
import AlbumPage from "./AlbumPage";
import AlbumMenuPage from "./AlbumMenuPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "albums", element: <AlbumMenuPage /> },
      { path: "albums/:id", element: <AlbumPage /> },
    ],
  },
]);

export default router;
