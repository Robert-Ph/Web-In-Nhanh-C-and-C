// ui-admin/src/pages/accounts/Accounts.tsx
import "./accounts.scss";
import ItemAccount from "../../components/itemAccount/ItemAccount.tsx";
import { useState } from "react";
import {
    Container,
    Grid,
    Typography,
    Paper,
    List,
    ListItem,
    ListItemText,
    Pagination,
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    SelectChangeEvent
} from "@mui/material";

interface Account {
    id: number;
    name: string;
    phone: string;
    category: string;
    role: number;
}

const accountsData: Account[] = [
    { id: 1, name: "Phan Trường Thịnh", phone: "0368 757 921", category: "Root", role: 0 },
    { id: 2, name: "Nguyễn Văn A", phone: "0123 456 789", category: "User", role: 3 },
    { id: 3, name: "Trần Thị B", phone: "0987 654 321", category: "User", role: 3 },
    { id: 4, name: "Lê Văn C", phone: "0123 456 123", category: "Admin cấp cao", role: 1 },
    { id: 5, name: "Ngô Thị D", phone: "0987 654 987", category: "User", role: 3 },
    { id: 6, name: "Hoàng Văn E", phone: "0368 111 222", category: "User", role: 3 },
    { id: 7, name: "Đinh Thị F", phone: "0123 333 444", category: "Admin thường", role: 2 },
    { id: 8, name: "Vũ Văn G", phone: "0987 555 666", category: "User", role: 3 },
    { id: 9, name: "Nguyễn Thị H", phone: "0369 123 456", category: "User", role: 3 },
    { id: 10, name: "Trần Văn I", phone: "0370 987 654", category: "User", role: 3 },
    { id: 11, name: "Phạm Thị J", phone: "0371 654 321", category: "User", role: 3 },
    { id: 12, name: "Lê Văn K", phone: "0372 123 789", category: "User", role: 3 },
    { id: 13, name: "Ngô Thị L", phone: "0373 456 987", category: "User", role: 3 },
    { id: 14, name: "Hoàng Văn M", phone: "0374 789 123", category: "User", role: 3 },
    { id: 15, name: "Đinh Thị N", phone: "0375 987 456", category: "User", role: 3 },
    { id: 16, name: "Vũ Thị O", phone: "0376 123 654", category: "User", role: 3 },
    { id: 17, name: "Nguyễn Văn P", phone: "0377 456 321", category: "User", role: 3 },
    { id: 18, name: "Trần Thị Q", phone: "0378 789 654", category: "User", role: 3 },
    { id: 19, name: "Phạm Văn R", phone: "0379 321 987", category: "User", role: 3 },
    { id: 20, name: "Lê Thị S", phone: "0380 654 123", category: "User", role: 3 },
];

const Accounts = () => {
    const [selectedCategory, setSelectedCategory] = useState("Tất cả");
    const [currentPage, setCurrentPage] = useState(1);
    const [accounts, setAccounts] = useState(accountsData);
    const [open, setOpen] = useState(false);
    const [newAccount, setNewAccount] = useState({ name: "", phone: "", category: "User", role: 3 });

    const accountsPerPage = 15;

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setNewAccount((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSelectChange = (event: SelectChangeEvent<number>) => {
        setNewAccount((prev) => ({
            ...prev,
            role: event.target.value as number,
        }));
    };

    const handleSave = () => {
        setAccounts((prev) => [
            ...prev,
            { ...newAccount, id: prev.length + 1, category: getCategoryByRole(newAccount.role) },
        ]);
        handleClose();
    };

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

    const filteredAccounts = selectedCategory === "Tất cả"
        ? accounts
        : accounts.filter((account) => account.category === selectedCategory);

    const paginatedAccounts = filteredAccounts.slice(
        (currentPage - 1) * accountsPerPage,
        currentPage * accountsPerPage
    );

    const categories = [
        "Tất cả",
        "Root",
        "Admin cấp cao",
        "Admin thường",
        "User",
    ];

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Accounts
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={2}>
                    <Box mb={2}>
                        <Paper>
                            <List component="nav">
                                {categories.map((category) => (
                                    <ListItem
                                        button
                                        selected={selectedCategory === category}
                                        onClick={() => handleCategoryChange(category)}
                                        key={category}
                                    >
                                        <ListItemText primary={category} />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Box display="flex" justifyContent="flex-end" mb={2}>
                        <Button variant="contained" color="primary" className="add" onClick={handleClickOpen}>
                            Thêm Mới
                        </Button>
                    </Box>
                    <Grid container spacing={3} className="account-list">
                        {paginatedAccounts.map((account) => (
                            <Grid item xs={12} sm={6} md={2.4} key={account.id}>
                                <ItemAccount account={account} />
                            </Grid>
                        ))}
                    </Grid>
                    <Box mt={3} display="flex" justifyContent="center">
                        <Pagination
                            count={Math.ceil(filteredAccounts.length / accountsPerPage)}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="primary"
                        />
                    </Box>
                </Grid>
            </Grid>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Thêm Tài Khoản Mới</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="name"
                        label="Họ và tên"
                        type="text"
                        fullWidth
                        value={newAccount.name}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="dense"
                        name="phone"
                        label="Số điện thoại"
                        type="text"
                        fullWidth
                        value={newAccount.phone}
                        onChange={handleChange}
                    />
                    <FormControl fullWidth margin="dense">
                        <InputLabel>Quyền</InputLabel>
                        <Select
                            value={newAccount.role}
                            onChange={handleSelectChange}
                        >
                            <MenuItem value={0}>Root</MenuItem>
                            <MenuItem value={1}>Admin cấp cao</MenuItem>
                            <MenuItem value={2}>Admin thường</MenuItem>
                            <MenuItem value={3}>User</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Hủy
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Lưu
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Accounts;
