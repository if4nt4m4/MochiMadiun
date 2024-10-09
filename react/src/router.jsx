import {createBrowserRouter, Router} from "react-router-dom";
import Home from "./components/Home";
import App from "./App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            // {
            //     path: "/logbooks",
            //     element: <Logbook />
            // },
        ]
    },
])

export default router;
