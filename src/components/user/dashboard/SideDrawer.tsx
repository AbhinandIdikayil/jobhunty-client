import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { MdOutlineArrowBackIos } from "react-icons/md";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { MessageSquareText, FileText, Search, Building2, CircleUserRound, FilePlus2, ListChecks, House } from 'lucide-react'
import Header from './Header';
import { useMediaQuery } from '@mui/material';

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const drawerWidth = 270;

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

interface props {
    handleDrawerOpen: () => void,
    handleDrawerClose: () => void,
    navLinks: string[],
    open: boolean
}

function SideDrawer({ handleDrawerOpen, handleDrawerClose, navLinks, open }: props) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" open={open} style={{ zIndex: 90, boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)', borderBottom: '0.1px solid #f1f1f1' }}>
                <Header open={open} func={handleDrawerOpen} />
            </AppBar>
            <Drawer
                sx={{
                    width: isSmallScreen ? '100%' : drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: isSmallScreen ? '100%' : drawerWidth,
                        boxSizing: 'border-box',
                        borderRight: '0.1px solid #f1f1f1',
                        // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
                    },
                    '& .MuiDrawer-paperAnchorLeft': {
                        [theme.breakpoints.down('sm')]: {
                            left: open ? 0 : '-100%',
                        },
                    },
                    border: ''
                }}
                variant={isSmallScreen ? "temporary" : "persistent"}
                className='bg-slate-50'
                anchor="left"
                open={open}
            >

                <DrawerHeader className='bg-slate-50' sx={{ display: 'flex', gap: 2, height: '81px', paddingTop: '42px' }}>
                    {/* <div className='flex items-center justify-center text-left '>
                        <div className="flex overflow-hidden relative flex-col justify-center items-center w-8 aspect-square">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/40550eadec7bbc460f9ee4be4291e780f8963001faa5df2daa66f0614767c8b9?"
                                className="shrink-0 aspect-[1.35] w-[43px]"
                            />
                        </div>
                        <div className="flex-auto text-2xl font-bold tracking-tight leading-9 text-slate-800">
                            JobHuntly
                        </div>
                    </div> */}
                    <div className="flex gap-1 items-start md:items-center pr-5 pl-4 text-2xl tracking-tight text-gray-800 whitespace-nowrap w-full ">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/40550eadec7bbc460f9ee4be4291e780f8963001faa5df2daa66f0614767c8b9?"
                            className="shrink-0 aspect-[1.35] w-[43px]"
                        />
                        <h1 className="font-black tracking-wide">JobHuntly</h1>
                    </div>
                    <MdOutlineArrowBackIos onClick={handleDrawerClose} className='max-md:w-10 max-md:pr-3' />
                </DrawerHeader>
                {/* <Divider /> */}
                <List className='bg-slate-50' sx={
                    {
                        // "&:hover": { backgroundColor: 'inherit' } 
                    }
                }>
                    {['Dashboard', 'Messages', 'applications', 'jobs', 'companies', 'profile'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={
                            {
                                // "&:hover": { backgroundColor: 'inherit' } 
                            }
                        } >
                            <NavLink className={'sidebar-link'} end to={navLinks[index]}>
                                <ListItemButton disableRipple sx={{
                                    paddingX: '25px ',
                                    paddingY: '5px',
                                    width: isSmallScreen ? '100vw' : drawerWidth - 2,
                                    "&.MuiButtonBase-root:hover": { bgcolor: "transparent" }
                                }} >
                                    <div
                                        //     className={`flex w-full items-center rounded-lg px-2 py-2 shadow-md border border-solid border-gray-200
                                        //   hover:translate-y-[-2px] hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer
                                        //   `}
                                        className='flex w-full items-center px-2 py-2'
                                    >
                                        <ListItemIcon sx={{ "&:hover": { backgroundColor: "transparent" } }}>
                                            {
                                                text == 'Dashboard' && <House className='text-slate-500' /> ||
                                                text == 'Messages' && <MessageSquareText className='text-slate-500' /> ||
                                                text == 'applications' && <FileText className='text-slate-500' /> ||
                                                text == 'jobs' && <Search className='text-slate-500' /> ||
                                                text == 'companies' && <Building2 className='text-slate-500' /> ||
                                                text == 'profile' && <CircleUserRound className='text-slate-500' />
                                            }
                                        </ListItemIcon>
                                        <h1 className='font-semibold text-base capitalize tracking-wide text-slate-500'>
                                            {text}
                                        </h1>
                                    </div>
                                </ListItemButton>
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
                <Divider sx={{ borderBottom: '0.5px solid gray' }} />
                <List className='bg-slate-50 h-full' disablePadding>
                    {['quiz', 'resume'].map((text) => (
                        <ListItem key={text} disablePadding className='capitalize' >
                            <NavLink to={text}>
                                {/* <div className="flex gap-3 justify-center items-center w-full text-base font-medium text-indigo-600 whitespace-nowrap max-w-[256px]">
                                    <div className="flex flex-1 shrink gap-4 items-center self-stretch px-4 py-3 my-auto basis-0">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/80e6613f6adeb2c10bcc09b2c8bef97f7d4bc62d46f7b76d9780b045cc96317c?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                                            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                        />
                                        <div className="flex-1 shrink self-stretch my-auto basis-0">
                                            Dashboard
                                        </div>
                                    </div>
                                </div> */}
                                <ListItemButton sx={{
                                    paddingX: '25px ',
                                    paddingY: '5px',
                                    width: isSmallScreen ? '100vw' : drawerWidth - 2,
                                    "&.MuiButtonBase-root:hover": { bgcolor: "transparent" }
                                }}>
                                    <div
                                        //     className='flex w-full items-center rounded-lg px-2 py-2 shadow-md border border-solid border-gray-200
                                        //  hover:translate-y-[-2px] hover:shadow-xl transition-all duration-300 ease-in-out'
                                        className='flex w-full items-center px-2 py-2'
                                    >
                                        <ListItemIcon>
                                            {
                                                text == 'resume' && <FilePlus2 className='text-slate-500' /> ||
                                                text == 'quiz' && <ListChecks size={30} className='text-slate-500' />
                                            }
                                        </ListItemIcon>
                                        <h1 className='font-extrabold text-sm tracking-wide text-slate-500'>
                                            {text}
                                        </h1>
                                    </div>
                                </ListItemButton>
                            </NavLink>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    )
}

export default SideDrawer