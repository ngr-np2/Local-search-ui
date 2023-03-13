import { createBrowserRouter, Link } from "react-router-dom";
import GetListedFree from "./pages/GetListedFree";
import Home from "./pages/Home";

export const AllRoutes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/getlistedfree', element: <GetListedFree /> }
])