
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { Outlet } from 'react-router-dom';
import SideDrawer from './SideDrawer';

const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));




const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(4, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function DashboardHome() {
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = React.useCallback(() => {
        setOpen(true);
    }, [])

    const handleDrawerClose = React.useCallback(() => {
        setOpen(false);
    }, []);

    const navLinks = ['', 'messages', 'applications', 'jobs', 'companies', 'profile']

    return (
        <Box sx={{ display: 'flex' }}>
            <SideDrawer
                open={open}
                navLinks={navLinks}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
            />
            <Main open={open}>
                <DrawerHeader>
                </DrawerHeader>


                <Outlet context={{ open }} />

            </Main>
        </Box>
    );
}