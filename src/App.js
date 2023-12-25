import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import ProductList from "./features/productlist/ProductList";
import NavBar from "./features/navbar/Navbar";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Navbar from "./features/navbar/Navbar";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CartPage from "./pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
