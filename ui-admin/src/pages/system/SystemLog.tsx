// ui-admin/src/pages/system/Login.tsx
import "./systemLog.scss";
import { useState, useEffect } from "react";
import { Container, Typography, Paper, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from "@mui/material";

interface LogEntry {
    id: number;
    timestamp: string;
    message: string;
    performer: string;
    level: string;
}

const SystemLog = () => {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        // Fetch logs from API or data source
        const fetchedLogs: LogEntry[] = [
            { id: 1, timestamp: "2024-08-01 12:00:00", message: "System started", performer: "System", level: "info" },
            { id: 2, timestamp: "2024-08-01 12:05:00", message: "User login", performer: "John Doe", level: "info" },
            { id: 3, timestamp: "2024-08-01 12:10:00", message: "Error fetching data", performer: "Jane Smith", level: "error" },
            // Add more logs here
        ];
        setLogs(fetchedLogs);
    }, []);

    const handleChangePage = (_: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                System Log
            </Typography>
            <Paper>
                <Box p={3}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Timestamp</TableCell>
                                    <TableCell>Message</TableCell>
                                    <TableCell>Performer</TableCell>
                                    <TableCell>Level</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {logs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((log) => (
                                    <TableRow key={log.id}>
                                        <TableCell>{log.id}</TableCell>
                                        <TableCell>{log.timestamp}</TableCell>
                                        <TableCell>{log.message}</TableCell>
                                        <TableCell>{log.performer}</TableCell>
                                        <TableCell>{log.level}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 50]}
                        component="div"
                        count={logs.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Box>
            </Paper>
        </Container>
    );
};

export default SystemLog;
