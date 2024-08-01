// ui-admin/src/pages/orders/Orders.tsx
import "./orders.scss";
import { orders } from "../../data.ts";
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Button,
    Box,
    Collapse,
    IconButton,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    SelectChangeEvent,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar.tsx";

interface Product {
    id: number;
    title: string;
    img: string;
    price: string;
}

interface Order {
    id: number;
    customer: string;
    email: string;
    phone: string;
    date: string;
    amount: string;
    status: string;
    products: Product[];
}

const Orders = () => {
    const [open, setOpen] = useState<{ [key: number]: boolean }>({});
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOrders, setFilteredOrders] = useState<Order[]>(orders);
    const [statusFilter, setStatusFilter] = useState("Tất cả");

    useEffect(() => {
        const results = orders.filter(order =>
            (statusFilter === "Tất cả" || order.status === statusFilter) &&
            (order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.phone.includes(searchTerm) ||
                order.date.includes(searchTerm) ||
                order.products.some(product => product.title.toLowerCase().includes(searchTerm.toLowerCase())))
        );
        setFilteredOrders(results);
    }, [searchTerm, statusFilter]);

    const handleToggle = (orderId: number) => {
        setOpen((prevOpen) => ({
            ...prevOpen,
            [orderId]: !prevOpen[orderId],
        }));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleStatusChange = (event: SelectChangeEvent<string>) => {
        setStatusFilter(event.target.value);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom marginBottom={5} marginTop={3} style={{ color: 'black' }}>
                Quản lý đơn hàng
            </Typography>
            <Box mb={2} display="flex" justifyContent="space-between" alignItems="center">
                <Box width="50%">
                    <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
                </Box>
                <Box width="50%" display="flex" justifyContent="flex-end">
                    <FormControl variant="outlined" style={{ minWidth: 200 }}>
                        <InputLabel>Trạng thái</InputLabel>
                        <Select
                            value={statusFilter}
                            onChange={handleStatusChange}
                            label="Trạng thái"
                        >
                            <MenuItem value="Tất cả">Tất cả</MenuItem>
                            <MenuItem value="Pending">Pending</MenuItem>
                            <MenuItem value="Shipped">Shipped</MenuItem>
                            <MenuItem value="Delivered">Delivered</MenuItem>
                            <MenuItem value="Cancelled">Cancelled</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>ID</TableCell>
                            <TableCell>Khách hàng</TableCell>
                            <TableCell>Số điện thoại</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Ngày</TableCell>
                            <TableCell>Số tiền</TableCell>
                            <TableCell>Trạng thái</TableCell>
                            <TableCell>Hành động</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredOrders.map((order: Order) => (
                            <>
                                <TableRow key={order.id}>
                                    <TableCell>
                                        <IconButton
                                            size="small"
                                            onClick={() => handleToggle(order.id)}
                                        >
                                            {open[order.id] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>{order.id}</TableCell>
                                    <TableCell>{order.customer}</TableCell>
                                    <TableCell>{order.phone}</TableCell>
                                    <TableCell>{order.email}</TableCell>
                                    <TableCell>{order.date}</TableCell>
                                    <TableCell>{order.amount}</TableCell>
                                    <TableCell>{order.status}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="small"
                                            component={Link}
                                            to={`/orders/${order.id}`}
                                        >
                                            Chi tiết
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={9} style={{ paddingBottom: 0, paddingTop: 0 }}>
                                        <Collapse in={open[order.id]} timeout="auto" unmountOnExit>
                                            <Box margin={1}>
                                                <Typography variant="h6" gutterBottom component="div">
                                                    Chi tiết đơn hàng
                                                </Typography>
                                                <Table size="small">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Ảnh sản phẩm</TableCell>
                                                            <TableCell>Tên sản phẩm</TableCell>
                                                            <TableCell>Giá</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        {order.products.map((product: Product) => (
                                                            <TableRow key={product.id}>
                                                                <TableCell>
                                                                    <img src={product.img} alt={product.title} style={{ width: 50 }} />
                                                                </TableCell>
                                                                <TableCell>{product.title}</TableCell>
                                                                <TableCell>{product.price}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </Box>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Orders;
