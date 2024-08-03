// ui-admin/src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        h4: {
            color: 'black',
            fontWeight: 'bold',
        },
    },
    components: {
        MuiTableCell: {
            styleOverrides: {
                head: {
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize:'2.5vh'
                },
            },
        },
    },
});

export default theme;
