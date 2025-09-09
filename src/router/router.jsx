import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import About from "../page/About";
import Projects from "../page/Projects";
import Contact from "../page/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { index: true, Component: Home },
            { path: "about", Component: About },
            { path: "projects", Component: Projects },
            { path: "contact", Component: Contact },
        ]
    },
]);

export default router;