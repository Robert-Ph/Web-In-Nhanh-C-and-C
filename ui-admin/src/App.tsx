// ui-admin/src/App.tsx
// import './App.css'
import Home from "./pages/home/Home.tsx";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import Products from "./pages/products/Products.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Users from "./pages/users/Users.tsx";
import Menu from "./components/menu/Menu.tsx";
import "./styles/global.scss"

function App() {

    const Layout = ()=>{
        return (
            <div className="main">
               <Navbar/>
                <div className="container">
                    <div className="menuContainer">
                        <Menu/>
                    </div>
                    <div className="comentContainer">
                        <Outlet/>
                    </div>
                </div>
            </div>
        )
    }


    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children:[
                {
                    path:"/",
                    element: <Home/>
                },
                {
                    path:"/users",
                    element: <Users/>
                },
                {
                    path:"/products",
                    element: <Products/>
                },

            ]
        }
    ]);


    return <RouterProvider router={router}/>;
}

export default App
