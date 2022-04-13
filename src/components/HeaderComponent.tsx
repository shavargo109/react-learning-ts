import { Button, Box, AppBar, Toolbar, IconButton, Typography, ButtonBase } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" >
                            This is a title
                        </Typography>
                        <ButtonBase
                            href="/home"
                            sx={{ flexGrow: 1 }}>
                            <img src={'assets/images/logo.png'} alt="asdasd" />
                        </ButtonBase>
                        <Button href="/home" color="inherit">Home </Button>
                        <Button href="/about" color="inherit">About </Button>
                        <Button href="/menu" color="inherit">Menu </Button>
                        <Button href="/contact" color="inherit" >Contact </Button>


                        <Button color="inherit" >Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}
export default Header;

