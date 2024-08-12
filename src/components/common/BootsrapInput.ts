import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';



export const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        // ... other styles
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        borderBottom: '1px solid #ced4da',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    '& .MuiNativeSelect-select': {
        paddingRight: '26px', // Ensure space for the dropdown arrow
    },
    '& .MuiNativeSelect-select option': {
        minWidth: '100%',
        width: 'auto',
        overflow: 'scroll',
        whiteSpace: 'nowrap',
    },
}));
