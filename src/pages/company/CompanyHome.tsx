
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { MdOutlineArrowBackIos } from "react-icons/md";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { RiHome2Line } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { LuClipboardList } from "react-icons/lu";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import Header from '../../components/company/Header';
import { Outlet , NavLink } from 'react-router-dom';


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

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
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

export default function CompanyHome() {
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = React.useCallback(() => {
        setOpen(true);
    }, [])

    const handleDrawerClose = React.useCallback(() => {
        setOpen(false);
    }, []);

    const navLinks = ['','messages','profile','applicants','job-list','schedules']

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>

                <Header open={open} func={handleDrawerOpen} />

            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <MdOutlineArrowBackIos onClick={handleDrawerClose} />
                </DrawerHeader>
                <Divider />
                <List>
                    {['Dashboard', 'Messages', 'Company profiles', 'All applicants', 'Job listing', 'My schedule'].map((text, index) => (
                        <ListItem key={text} disablePadding >
                            <NavLink className={'sidebar-link'} end to={navLinks[index]}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {
                                            text == 'Dashboard' && <RiHome2Line size={30} /> ||
                                            text == 'Messages' && <BiMessageDetail size={30} /> ||
                                            text == 'Company profiles' && <TbBuildingSkyscraper size={30} /> ||
                                            text == 'All applicants' && <PiUsersThreeDuotone size={30} /> ||
                                            text == 'Job listing' && <LuClipboardList size={30} /> ||
                                            text == 'My schedule' && <AiOutlineSchedule size={30} />
                                        }
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Settings'].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <IoSettingsOutline size={30} />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader>

                </DrawerHeader>
                <Outlet context={{ open }} />

            </Main>
        </Box>
    );
}