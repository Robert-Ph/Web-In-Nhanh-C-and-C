import { Link, useParams } from "react-router-dom";
import { Container, Typography, Paper, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Collapse, IconButton, Button } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import "./accountDetail.scss";
import { accountsData, orders } from "../../data.ts";
import { useState } from "react";

const getCategoryByRole = (role: number) => {
    switch (role) {
        case 0:
            return "Root";
        case 1:
            return "Admin cấp cao";
        case 2:
            return "Admin thường";
        case 3:
            return "User";
        default:
            return "User";
    }
};

const AccountDetail = () => {
    const { id } = useParams<{ id?: string }>();
    const account = accountsData.find((acc) => acc.id === parseInt(id || ""));
    const [open, setOpen] = useState<{ [key: number]: boolean }>({});

    if (!account) {
        return <Typography variant="h6">Tài khoản không tồn tại</Typography>;
    }

    const userOrders = orders.filter((order) => order.customerId === account.id);

    const handleToggle = (orderId: number) => {
        setOpen((prevOpen) => ({
            ...prevOpen,
            [orderId]: !prevOpen[orderId],
        }));
    };

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" gutterBottom>
                    Chi tiết tài khoản
                </Typography>
                <Paper className="account-detail-paper">
                    <Typography variant="h6">Họ và tên: {account.name}</Typography>
                    <Typography variant="h6">Số điện thoại: {account.phone}</Typography>
                    <Typography variant="h6">Loại tài khoản: {account.category}</Typography>
                    <Typography variant="h6">Quyền: {account.role} ({getCategoryByRole(account.role)})</Typography>
                </Paper>

                {account.role === 3 && (
                    <Box mt={4}>
                        <Typography variant="h5" gutterBottom>
                            Danh sách đơn hàng
                        </Typography>
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
                                    {userOrders.map((order) => (
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
                                                                    {order.products.map((product) => (
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
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default AccountDetail;
