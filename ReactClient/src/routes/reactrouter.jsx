
import {createBrowserRouter,} from "react-router-dom";

import ErrorPage from '../utils/error-page.jsx'
import Root from './root.jsx'
import Create from './CreateRoute.jsx'

//calling from pages instead of routes
import View from '../pages/ViewChartPage.jsx'


const router = createBrowserRouter([
  //create a new chart path
  {
    //parent
    //root is the navbar and outlet so that we can render components under it
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, //error element will be inherited by children
    //Children
    children: [
      { path: "create", element: <Create />},
      { path: "viewcharts", element: <View />},
      { path: "register", element: <Create/>},
      { path: "signin", element: <Create/>},
      
    ],
  },
]);


///you can assign a errorelement to a child for its own error handling
// { 
//     path: "signin", 
//     element: <Create />, 
//     errorElement: <SignInError /> // <- unique error page for this route
//   }

export default router;