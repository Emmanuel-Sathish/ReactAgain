import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";

const AppLayout = ()=>{
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/home",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:id",
        element: <Restaurant></Restaurant>,
        errorElement: <Error />,
      },
    ],
  },
]);

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)


 
