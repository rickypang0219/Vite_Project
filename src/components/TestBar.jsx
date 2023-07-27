import IconButton from "@mui/material/IconButton"
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function ColorModeToggle({ colorMode, theme }) {
    return (
        <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
        >
            {theme.palette.mode === 'dark' ? <Brightness7Icon />: <Brightness7Icon />}
        </IconButton>
    );
}
