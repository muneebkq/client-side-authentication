// Active sidenav icon imports 
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ArticleIcon from '@mui/icons-material/Article';
import AodIcon from '@mui/icons-material/Aod';
import TimerIcon from '@mui/icons-material/Timer';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import GroupIcon from '@mui/icons-material/Group';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

//Inactive sidenav icon imports 
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AodOutlinedIcon from '@mui/icons-material/AodOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

//Sidenav filter data
export const sideNavFilterData = {
    'home': ['Products', 'License Policies', 'Trial Policies', 'Tags', 'Get Started'],
    'features': ['Feature Flags', 'Product Versions'],
    'licenses': ['All', 'Expired', 'Revoked', 'Expiring Soon'],
    'activations': ['All', 'Active', 'Expired'],
    'trials': ['All', 'Active', 'Expired'],
    'releases': ['All', 'Private', 'Published'],
    'users': ['All', 'Active', 'Expired', 'New'],
    'reports': ['Activations', 'Licenses', 'Trials', 'Releases', 'User', 'Custom'],
    'developer': ['Webhooks', 'Integrations', 'Email Templates', 'Access Tokens', 'Downloads'],
    'account': ['Profiles', 'Billing and Plans', 'Security', 'Team', 'Audit Logs', 'Branding']
}

export const activeSidenavIcon = [
    <PrecisionManufacturingIcon key="home" />, <ListAltIcon key="features" />, <ArticleIcon key="licenses" />,
    <AodIcon key="activations" />, <TimerIcon key="trials" />, <CloudUploadIcon key="releases" />,
    <GroupIcon key="users" />, <AnalyticsIcon key="reports" />, <AutoFixHighIcon key="developer" />,
    <SettingsApplicationsIcon key="account"/>,<LogoutOutlinedIcon key="logout"/>
]
export const inActiveSidenavIcon = [
    <PrecisionManufacturingOutlinedIcon key="home" />, <ListAltOutlinedIcon key="features" />, <ArticleOutlinedIcon key="licenses" />,
    <AodOutlinedIcon key="activations" />, <TimerOutlinedIcon key="trials" />, <CloudUploadOutlinedIcon key="releases" />,
    <GroupOutlinedIcon key="users" />, <AnalyticsOutlinedIcon key="reports" />, <AutoFixHighOutlinedIcon key="developer" />,
    <SettingsOutlinedIcon key="account" />,<LogoutOutlinedIcon key="logout"/>
]
