// ui-admin/src/App.tsx
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from "./pages/home/Home.tsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Products from "./pages/products/Products.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Accounts from "./pages/accounts/Accounts.tsx";
import Menu from "./components/menu/Menu.tsx";
import "./styles/global.scss";
import Orders from "./pages/orders/Orders.tsx";
import OrderDetail from "./pages/orders/OrderDetail.tsx";
import EditProduct from "./pages/products/EditProduct.tsx";
import CreateProduct from "./pages/products/CreateProduct.tsx";
import SystemLog from "./pages/system/SystemLog.tsx";
import theme from './theme';
import AccountDetail from "./pages/accounts/AccountDetail.tsx";
import Login from  "./pages/login/Login.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();

const Layout = () => {
    return (
        <div className="main">
            <Navbar />
            <div className="container">
                <div className="menuContainer">
                    <Menu />
                </div>
                <div className="comentContainer">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

const router = createBrowserRouter([
    {path:"/admin", element:<Login />},
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/accounts", element: <Accounts /> },
            { path: "/products", element: <Products /> },
            { path: "/orders", element: <Orders /> },
            { path: "/orders/:orderId", element: <OrderDetail /> },
            { path: "/products/edit/:productId", element: <EditProduct /> },
            { path: "/products/create", element: <CreateProduct /> },
            { path: "/system-log", element: <SystemLog /> },
            { path: "/account/:id", element: <AccountDetail /> },
        ],
    },
]);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
                <ToastContainer />
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
