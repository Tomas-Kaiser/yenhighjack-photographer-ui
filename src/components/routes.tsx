import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/about', element: <AboutPage /> },
    { path: '/contact', element: <ContactPage /> }
])

export default router;