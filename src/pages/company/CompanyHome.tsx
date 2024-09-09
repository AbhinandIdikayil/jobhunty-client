import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Outlet } from 'react-router-dom';
import SideDrawer from '../../components/company/SideDrawer';
import { getCompany } from 'src/redux/actions/companyAction';
import { useDispatch} from 'react-redux';
import { AppDispatch } from 'src/redux/store';

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
    const dispatch: AppDispatch = useDispatch()
    const [loading, setLoading] = React.useState<boolean>(false)

    const handleDrawerOpen = React.useCallback(() => {
        setOpen(true);
    }, [])

    const handleDrawerClose = React.useCallback(() => {
        setOpen(false);
    }, []);

    const fetchCompany = async () => {
        try {
            await dispatch(getCompany()).unwrap();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        const checkUserRole = async () => {
            try {
                await fetchCompany();
            } catch (error) {
                // Optionally handle any errors here
            }
        };

        checkUserRole();
    }, [])

    const navLinks = ['', 'messages', 'profile', 'applicants', 'job-list', 'schedules']

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