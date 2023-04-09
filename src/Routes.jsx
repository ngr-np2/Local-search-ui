

import { createBrowserRouter } from "react-router-dom";
import GetListedFree from "./pages/GetListedFree";
import Home from "./pages/Home";
import AreYouLost from "./pages/AreYouLost";
import ListsPage from "./pages/SearchList";
import BusinessProfile from "./pages/BusinessProfile";

export const AllRoutes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/getlistedfree', element: <GetListedFree /> },
    { path: '/search/:id', element: <ListsPage /> },
    { path: '/profile', element: <BusinessProfile /> },
    { path: '*', element: <AreYouLost /> }
])