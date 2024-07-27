import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../Error";
import Home from "../Pages/Home/Index";
import Login from "../Pages/Auth/Login";
import Signup from "../Pages/Auth/Signup";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import Homepage from "../Pages/Auth/Homepage";
import WineCard from "../Components/WineCard";
import Searchpage from "../Pages/Auth/Searchpage";
import Shoppingcart from "../Pages/Auth/Shoppingcart";
import Productupload from "../Pages/Auth/Productupload";
import Cartshopping from "../Pages/Auth/Cartshopping";
import Checkoutpage from "../Pages/Auth/Checkoutpage";
import Checkoutpagealt from "../Pages/Auth/Checkoutpagealt";
import Checkoutpageform from "../Pages/Auth/Checkoutpageform";
import Checkoutpagesummary from "../Pages/Auth/Checkoutpagesummary";
import Checkoutpagemain from "../Pages/Auth/Checkoutpagemain";
import Productpurchasepage from "../Pages/Auth/Productpurchasepage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/home-page", element: <Homepage /> },
      { path: "/winecard", element: <WineCard /> },
      {path: "/searchpage", element:<Searchpage/>},
      {path: "/shoppingcart", element:<Shoppingcart/>},
      {path: "/productupload", element:<Productupload/>},
      {path: "/cartshopping", element:<Cartshopping/>},
      {path: "/checkoutpage", element:<Checkoutpage/>},
      {path: "/checkoutpagealt", element:<Checkoutpagealt/>},
      {path: "/checkoutpageform", element:<Checkoutpageform/>},
      {path: "/checkoutpagesummary", element:<Checkoutpagesummary/>},
      {path: "/checkoutpagemain", element:<Checkoutpagemain/>},
      {path: "/productpurchasepage", element:<Productpurchasepage/>},
      



    ],
  },
]);
