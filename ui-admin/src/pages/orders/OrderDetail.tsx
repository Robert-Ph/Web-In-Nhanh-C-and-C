// ui-admin/src/pages/orders/OrderDetail.tsx
import "./orderDetail.scss";
import {Link, useParams} from "react-router-dom";
import { orders } from "../../data.ts";
import {
    Container,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    Button,
} from "@mui/material";

const OrderDetail = () => {
    const { orderId } = useParams<{ orderId: string }>();
    const order = orders.find((order) => order.id === Number(orderId));

    if (!order) {
        return <Typography variant="h6">Đơn hàng không tồn tại</Typography>;
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom marginBottom={5} marginTop={3} style={{ color: 'black' }}>
                Chi tiết đơn hàng #{order.id}
            </Typography>
            <Card>
                <CardContent>
                    <Typography variant="h6">Thông tin khách hàng</Typography>
                    <Typography variant="body1">Tên khách hàng: {order.customer}</Typography>
                    <Typography variant="body1">Email: {order.email}</Typography>
                    <Typography variant="body1">Số điện thoại: {order.phone}</Typography>
                    <Typography variant="body1">Ngày đặt hàng: {order.date}</Typography>
                    <Typography variant="body1">Tổng số tiền: {order.amount}</Typography>
                    <Typography variant="body1">Trạng thái: {order.status}</Typography>
                </CardContent>
            </Card>
            <Box mt={4}>
                <Typography variant="h6" gutterBottom>
                    Chi tiết sản phẩm
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
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
                                        <CardMedia
                                            component="img"
                                            image={product.img}
                                            alt={product.title}
                                            style={{ width: 100 }}
                                        />
                                    </TableCell>
                                    <TableCell>{product.title}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box mt={4} display="flex" justifyContent="flex-end">
                <Button variant="contained" color="primary" component={Link} to="/orders">
                    Quay lại
                </Button>
            </Box>
        </Container>
    );
};

export default OrderDetail;
