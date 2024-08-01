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
import Accounts from "./pages/users/Users.tsx";
import Menu from "./components/menu/Menu.tsx";
import "./styles/global.scss"
import Orders from "./pages/orders/Orders.tsx";
import OrderDetail from "./pages/orders/OrderDetail.tsx";
import EditProduct from "./pages/products/EditProduct.tsx";
import CreateProduct from "./pages/products/CreateProduct.tsx";
import SystemLog from "./pages/system/SystemLog.tsx";

function App() {

    const Layout = () => {
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
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/accounts",
                    element: <Accounts/>
                },
                {
                    path: "/products",
                    element: <Products/>
                },
                {
                    path: "/orders",
                    element: <Orders/>,
                },
                {
                    path: "/orders/:orderId",
                    element: <OrderDetail/>,
                },
                {
                    path: "/products/edit/:productId",
                    element: <EditProduct/>,
                },
                {
                    path: "/products/create",
                    element: <CreateProduct/>,
                },
                {
                    path: "/system-log",
                    element: <SystemLog/>,
                },
            ]
        }
    ]);


    return <RouterProvider router={router}/>;
}

export default App
