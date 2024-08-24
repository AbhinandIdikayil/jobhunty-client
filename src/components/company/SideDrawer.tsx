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
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { TbNumber1Small } from "react-icons/tb";
import { Building2Icon, ClipboardListIcon, LayoutGrid, MessageSquareText, NotebookPen, Users } from 'lucide-react'


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
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{zIndex:90}}>

        <Header open={open} func={handleDrawerOpen} />

      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            // borderRight: '1px solid black'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >

        <DrawerHeader sx={{ borderBottom: '1px solid black', display: 'flex', gap:2,height:'81px' }}>
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
        <List>
          {['Dashboard', 'Messages', 'Company profiles', 'All applicants', 'Job listing', 'My schedule'].map((text, index) => (
            <ListItem key={text} disablePadding >
              <NavLink className={'sidebar-link'} end to={navLinks[index]}>
                <ListItemButton sx={{ width: drawerWidth - 2 }}>
                  <ListItemIcon>
                    {
                      text == 'Dashboard' && <LayoutGrid /> ||
                      text == 'Messages' && <MessageSquareText /> ||
                      text == 'Company profiles' && <Building2Icon /> ||
                      text == 'All applicants' && <Users /> ||
                      text == 'Job listing' && <ClipboardListIcon /> ||
                      text == 'My schedule' && <NotebookPen />
                    }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ borderBottom: '.5px solid black' }} />
        <List>
          {['Settings'].map((text) => (
            <ListItem key={text} disablePadding>
              <NavLink to={'settings'}>
                <ListItemButton>
                  <ListItemIcon>
                    <IoSettingsOutline size={30} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  <TbNumber1Small size={30} />
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