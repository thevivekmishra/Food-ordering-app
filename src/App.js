import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Instamart from "./components/Instamart";
import { useState,useContext } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const AppLayout = () => {
    const [user,setUser]=useState({
        name:"vivek kumar mishra",
        email:"vivek@gmail.com"
    });

    return (
        <Provider store={store}>
            <Header />
            <Outlet />
            <Footer />
        </Provider>
    );
};

//creating router
const appRouter = createBrowserRouter ([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/About",
                element:<About/>,
                children:[{
                    path:"profile", //dont write /profile otherwise react act as localhost1234/profile
                    element:<Profile/>
                }]
            },
            {
                path:"/Contact",
                element:<Contact/>
            },
            {
                path:"/home",
                element:<Body/>
            },
            {
                path:"/Restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/instamart",
                element:<Instamart/>
            },
            {
                path:"/Cart",
                element:<Cart/>
            }
        ]
    },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router = {appRouter} />);