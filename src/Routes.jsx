

import { createBrowserRouter, Link } from "react-router-dom";
import GetListedFree from "./pages/GetListedFree";
import Home from "./pages/Home";

export const AllRoutes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/getlistedfree', element: <GetListedFree /> }
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