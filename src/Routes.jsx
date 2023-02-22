import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

export const AllRoutes = createBrowserRouter([
    { path: '/', element: <Home /> }
])