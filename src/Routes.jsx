

import { createBrowserRouter } from "react-router-dom";
import GetListedFree from "./pages/GetListedFree";
import Home from "./pages/Home";
import SearchList from "./pages/SearchList";
import AreYouLost from "./pages/AreYouLost";

export const AllRoutes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/getlistedfree', element: <GetListedFree /> },
    { path: '/search/:id', element: <SearchList /> },
    { path: '*', element: <AreYouLost /> }
])

// import { lazy, Suspense } from "react";
// import { createBrowserRouter, Link } from "react-router-dom";
// import LoadingCircel from './components/loading/loadingCircle'
// const Home = lazy(() => import('./pages/Home'))
// const GetListedFree = lazy(() => import('./pages/GetListedFree'))
// export const AllRoutes = createBrowserRouter([
//     { path: '/', element: <Home /> },
//     {
//         path: '/getlistedfree',
//         element:
//             <Suspense fallback={<LoadingCircle />}>
//                 <GetListedFree />
//             </Suspense>
//     }
// ])