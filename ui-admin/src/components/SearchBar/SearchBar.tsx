// ui-admin/src/components/SearchBar/SearchBar.tsx
import React from "react";
import { TextField, Box } from "@mui/material";
import { Search } from "@mui/icons-material";

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
    return (
        <Box display="flex" alignItems="center" width="100%">
            <TextField
                variant="outlined"
                label="Tìm kiếm"
                value={searchTerm}
                onChange={onSearchChange}
                InputProps={{
                    startAdornment: <Search />
                }}
                fullWidth
            />
        </Box>
    );
};

export default SearchBar;
