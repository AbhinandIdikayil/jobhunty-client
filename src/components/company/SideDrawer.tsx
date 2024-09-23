import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { MdOutlineArrowBackIos } from "react-icons/md";
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IoSettingsOutline } from "react-icons/io5";
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { Building2Icon, ClipboardListIcon, LayoutGrid, MessageSquareText, NotebookPen, Users } from 'lucide-react'
import { useMediaQuery } from '@mui/material';


interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240;

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
      <AppBar position="fixed" open={open} style={{ zIndex: 90 }}>
        {/* //! company header */}
        <Header open={open} func={handleDrawerOpen} />
      </AppBar>
      <Drawer
        sx={{
          width: isSmallScreen ? '100%' : drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: isSmallScreen ? '100%' : drawerWidth,
            boxSizing: 'border-box',
          },
          '& .MuiDrawer-paperAnchorLeft': {
            [theme.breakpoints.down('sm')]: {
              left: open ? 0 : '-100%',
            },
          },
        }}
        variant={isSmallScreen ? "temporary" : "persistent"}
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ borderBottom: '1px solid black', display: 'flex', gap: 2, height: '81px' }}>
          <div className='flex items-center justify-center text-left'>
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
          </div>
          <MdOutlineArrowBackIos onClick={handleDrawerClose} />
        </DrawerHeader>
        <Divider />
        <List
        >
          {['Dashboard', 'Messages', 'All applicants', 'Job listing', 'My schedule'].map((text, index) => (
            <ListItem key={text} disablePadding >
              <NavLink className={'sidebar-link'} end to={navLinks[index]}>
                <ListItemButton disableRipple  sx={{
                  paddingX: '15px ',
                  paddingY: '5px',
                  width: isSmallScreen ? '100vw' : drawerWidth - 2,
                  "&.MuiButtonBase-root:hover": { bgcolor: "transparent" }
                }}
                >
                  <div
                    className={`flex w-full items-center rounded px-2 py-2  border border-solid border-gray-200`}>
                    <ListItemIcon  sx={{ "&:hover": { backgroundColor: "transparent" } }}>
                      {
                        text == 'Dashboard' && <LayoutGrid color='black' /> ||
                        text == 'Messages' && <MessageSquareText color='black' /> ||
                        text == 'Company profiles' && <Building2Icon color='black' /> ||
                        text == 'All applicants' && <Users color='black' /> ||
                        text == 'Job listing' && <ClipboardListIcon color='black' /> ||
                        text == 'My schedule' && <NotebookPen color='black' />
                      }
                    </ListItemIcon>
                    <ListItemText sx={{ color: 'black' }} primary={text} />
                  </div>
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderBottom: '.5px solid black' }} />
        <List disablePadding>
          {['Settings'].map((text) => (
            <ListItem key={text} disablePadding>
              <NavLink to={'settings'}>
                <ListItemButton sx={{ width: isSmallScreen ? '100vw' : drawerWidth - 2, "&.MuiButtonBase-root:hover": { bgcolor: "transparent" } }}>
                  <div className='flex w-full items-center rounded-sm px-2 py-2  border border-solid border-gray-200
                                     hover:translate-y-[-2px] hover:shadow-xl transition-all duration-300 ease-in-out'>
                    <ListItemIcon>
                      <IoSettingsOutline size={30} color='black' />
                    </ListItemIcon>
                    <ListItemText primary={text} />
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