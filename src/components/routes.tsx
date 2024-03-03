import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import PhotoGrid from "./PhotoGrid";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <PhotoGrid /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'contact', element: <ContactPage /> }
        ]
    }
])

export default router;