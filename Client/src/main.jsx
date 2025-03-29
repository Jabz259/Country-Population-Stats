import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//how is index.css being served here?
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './utils/error-page.jsx'
import Root from './routes/root.jsx'
import Create from './routes/CreateRoute.jsx'

//calling from pages instead of routes
import View from './pages/ViewChartPage.jsx'


const router = createBrowserRouter([
  //create a new chart path
  {
    //parent
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    //Child
    children: [
      {
        path: "create",
        element: <Create />,
        errorElement: <ErrorPage />,
      },
      {
        path: "viewcharts",
        element: <View />,
        errorElement: <ErrorPage />,
      },
      
    ],
  },
]);

// const router = createBrowserRouter([
//   //Creating home path
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
//   //create a new chart path
//   {
//     path: "/create",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "",
//         element: <Create />,
//       },
//     ],
//   },
// ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
