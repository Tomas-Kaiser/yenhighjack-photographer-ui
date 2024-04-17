import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import LandingPage from "./LandingPage";
import AlbumPage from "./AlbumPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <LandingPage /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'contact', element: <ContactPage /> },
            { path: 'album/:id', element: <AlbumPage /> }
        ]
    }
])

export default router;