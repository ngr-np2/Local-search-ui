import { Outlet, createBrowserRouter } from "react-router-dom";
import GetListedFree from "./pages/GetListedFree";
import Home from "./pages/Home";
import AreYouLost from "./pages/AreYouLost";
import ListsPage from "./pages/SearchList";
import BusinessProfile from "./pages/BusinessProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./layout/AdminLayout";
import Businesses from "./pages/admin/Businesses";
import Ads from "./pages/admin/Ads";
import UserProfile from "./pages/admin/UserProfile";

// import Map from "./pages/test/Form";

export const AllRoutes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/getlistedfree", element: <GetListedFree /> },
  {
    path: "/search",
    element: <Outlet />,
    children: [
      { path: "/search/:id", element: <ListsPage /> },
      { path: "/search/keywords/:id", element: <ListsPage /> },
      { path: "/search/categorys/:id", element: <ListsPage /> },
    ],
  },

  { path: "/profile/:id", element: <BusinessProfile /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/businesses", element: <Businesses /> },
      { path: "/dashboard/ads", element: <Ads /> },

      { path: "/dashboard/users/:id", element: <UserProfile /> },
    ],
  },
  // { path: "/register", element: <Register /> },
  // {path: 'test',element: <Map/>},
  { path: "*", element: <AreYouLost /> },
]);


// regex
// const usernamRegex = /^\w+&/;
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}/;
// const dateRegex = /^\d{4}-\d{2}-\d{2}&/;
// const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)&/;