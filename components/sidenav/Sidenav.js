import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import AodOutlinedIcon from '@mui/icons-material/AodOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ArticleIcon from '@mui/icons-material/Article';
import TimerIcon from '@mui/icons-material/Timer';
import AodIcon from '@mui/icons-material/Aod';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import GroupIcon from '@mui/icons-material/Group';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Link from 'next/link';
import { useRouter } from "next/router";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function Sidenav() {
  const router = useRouter()
  return (
    <div className='h-screen flex'>
      <nav className= "flex flex-col justify-between bg-zinc-100 border-solid border-r-2 border-0 border-zinc-200">
        <List>
          <ListItem>
            <Link href="/home" passHref>
              <ListItemButton >
                <ListItemIcon >
                  <PrecisionManufacturingOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />
                </ListItemIcon>
                <ListItemText primary="Home"/>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/features" passHref>
              <ListItemButton >
                <ListItemIcon >
                  <ListAltOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />
                </ListItemIcon>
                <ListItemText primary="Features"/>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/licenses" passHref>
              <ListItemButton>
                <ListItemIcon >
                  <ArticleOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />
                </ListItemIcon>
                <ListItemText primary="Licenses"/>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/activations" passHref>
              <ListItemButton>
                <ListItemIcon >
                  <AodOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />
                </ListItemIcon>
                <ListItemText primary="Activations"/>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/trials" passHref>
              <ListItemButton>
                <ListItemIcon >
                  <TimerOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />
                </ListItemIcon>
                <ListItemText primary="Trials"/>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/releases" passHref>
              <ListItemButton>
                <ListItemIcon >
                  <CloudUploadOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />
                </ListItemIcon>
                <ListItemText primary="Releases"/>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/users" passHref>
              <ListItemButton>
                <ListItemIcon >
                  <GroupOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />
                </ListItemIcon>
                <ListItemText primary="Users"/>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/reports" passHref>
              <ListItemButton>
                <ListItemIcon >
                  <AnalyticsOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />
                </ListItemIcon>
                <ListItemText primary="Reports"/>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <Link href="/developer" passHref>
              <ListItemButton>
                <ListItemIcon >
                  <AutoFixHighOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />
                </ListItemIcon>
                <ListItemText primary="Developer"/>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/account" passHref>
              <ListItemButton>
                <ListItemIcon >
                    <SettingsOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />
                </ListItemIcon>
                <ListItemText primary="Account"/>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/logout" passHref>
              <ListItemButton>
                <ListItemIcon >
                  <LogoutOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />
                </ListItemIcon>
                <ListItemText primary="Logout"/>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>     
      </nav>
    </div>
  )
}


      {/* <div className={style.navigationContainer}>
        <section className={style.navList}>
          <Link href='/' className={style.navLink} passHref>
            <div className={router.pathname == "/" ? "font-bold" : "font-normal"}>
              <div className={router.pathname == "/" ? style.navActiveIcon : style.navIcon} >
                {router.pathname == "/"
                  ? <PrecisionManufacturingIcon fontSize="medium" sx={{ margin: 'auto' }} />
                  : <PrecisionManufacturingOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />
                }
              </div>
              <div className='pt-1 text-center'>
                <span>Home</span>
              </div>
            </div>
          </Link>
          <Link href='/Features' className={style.navLink} passHref>
            <div className={router.pathname == "/Features" ? "font-bold" : "font-normal"}>
              <div className={router.pathname == "/Features" ? style.navActiveIcon : style.navIcon} >
                {router.pathname == "/Features"
                  ? <ListAltIcon fontSize="medium" sx={{ margin: 'auto' }} />
                  : <ListAltOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />
                }
              </div>
              <div className='pt-1 text-center'>
                <span>Features</span>
              </div>
            </div>
          </Link>
          <Link href='/Licenses' className={style.navLink} passHref>
            <div className={router.pathname == "/Licenses" ? "font-bold" : "font-normal"}>
              <div className={router.pathname == "/Licenses" ? style.navActiveIcon : style.navIcon}>
                {router.pathname == "/Licenses"
                  ? <ArticleIcon fontSize="medium" sx={{ margin: 'auto' }} />
                  : <ArticleOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />}
              </div>
              <div className='pt-1 text-center'>
                <span>Licenses</span>
              </div>
            </div>
          </Link>
          <Link href='/Activations' className={style.navLink} passHref>
            <div className={router.pathname == "/Activations" ? "font-bold" : "font-normal"}>
              <div className={router.pathname == "/Activations" ? style.navActiveIcon : style.navIcon}>
                {router.pathname == "/activations"
                  ? <AodIcon fontSize="medium" sx={{ margin: 'auto' }} />
                  : <AodOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />}
              </div>
              <div className='pt-1 text-center'>
                <span>Activations</span>
              </div>
            </div>
          </Link>
          <Link href='/Trials' className={style.navLink} passHref>
            <div className={router.pathname == "/Trials" ? "font-bold" : "font-normal"}>
              <div className={router.pathname == "/Trials" ? style.navActiveIcon : style.navIcon}>
                {router.pathname == "/Trials"
                  ? <TimerIcon fontSize="medium" sx={{ margin: 'auto' }} />
                  : <TimerOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />}
              </div>
              <div className='pt-1 text-center'>
                <span>Trials</span>
              </div>
            </div>
          </Link>
          <Link href='/Releases' className={style.navLink} passHref>
            <div className={router.pathname == "/Releases" ? "font-bold" : "font-normal"}>
              <div className={router.pathname == "/Releases" ? style.navActiveIcon : style.navIcon} >
                {router.pathname == '/Releases'
                  ? <CloudUploadIcon fontSize="medium" sx={{ margin: 'auto' }} />
                  : <CloudUploadOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />}
              </div>
              <div className='pt-1 text-center'>
                <span>Releases</span>
              </div>
            </div>
          </Link>
          <Link href='/Users' className={style.navLink} passHref>
            <div className={router.pathname == "/Users" ? "font-bold" : "font-normal"}>
              <div className={router.pathname == "/Users" ? style.navActiveIcon : style.navIcon}>
                {router.pathname == "/Users"
                  ? <GroupIcon fontSize="medium" sx={{ margin: 'auto' }} />
                  : <GroupOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />}
              </div>
              <div className='pt-1 text-center'>
                <span>Users</span>
              </div>
            </div>
          </Link>
          <Link href='/Reports' className={style.navLink} passHref>
            <div className={router.pathname == "/Reports" ? "font-bold" : "font-normal"}>
              <div className={router.pathname == "/Reports" ? style.navActiveIcon : style.navIcon}>
                {router.pathname == "/Reports"
                  ? <AnalyticsIcon fontSize="medium" sx={{ margin: 'auto' }} />
                  : <AnalyticsOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />}
              </div>
              <div className='pt-1 text-center'>
                <span>Reports</span>
              </div>
            </div>
          </Link>
        </section>
        <section className={style.navList}>
          <Link href='/Developer' className={style.navLink} passHref>
            <div className={router.pathname == "/Developer" ? "font-bold" : "font-normal"}>
              <div className={router.pathname == "/Developer" ? style.navActiveIcon : style.navIcon}>
                {router.pathname == "/Developer"
                  ? <AutoFixHighIcon fontSize="medium" sx={{ margin: 'auto' }} />
                  : <AutoFixHighOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />}
              </div>
              <div className='pt-1 text-center'>
                <span>Developer</span>
              </div>
            </div>
          </Link>
          <Link href='/Account' className={style.navLink} passHref>
            <div className={router.pathname == "/Account" ? "font-bold" : "font-normal"}>
              <div className={router.pathname == "/Account" ? style.navActiveIcon : style.navIcon}>
                {router.pathname == "/Account"
                  ? <SettingsApplicationsIcon fontSize="medium" sx={{ margin: 'auto' }} />
                  : <SettingsOutlinedIcon fontSize="medium" sx={{ margin: 'auto' }} />}
              </div>
              <div className='pt-1 text-center'>
                <span>Account</span>
              </div>
            </div>
          </Link>
          <Link href='/Logout' className={style.navLink} passHref>
            <div className='pt-2 flex  px-2 hover:bg-white rounded-full'>
              <LogoutOutlinedIcon fontSize="medium"/>
              <span className='flex items-center '>Logout</span>
            </div>
          </Link>
        </section>
      </div> */}