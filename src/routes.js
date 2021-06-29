// Pages
import {
  AppBar,
  Autocomplete,
  Avatars,
  BackendError,
  Badges,
  Blank,
  ButtonNavigation,
  Buttons,
  Calendar,
  Cards,
  Charts,
  Chat,
  Chips,
  Detail,
  Dialogs,
  Dividers,
  Drawers,
  Editor,
  ExpansionPanels,
  Google,
  GridList,
  Home,
  Invoice,
  Leaflet,
  Lists,
  Lockscreen,
  Media,
  Menus,
  Messages,
  NotFound,
  Paper,
  PasswordReset,
  Pickers,
  PricingPage,
  Products,
  Progress,
  SelectionControls,
  Selects,
  Signin,
  Signup,
  Snackbars,
  Social,
  Steppers,
  Tables,
  Tabs,
  Taskboard,
  TextFields,
  TimelinePage,
  Tooltips,
  Widgets
} from './pages';
  import { 
    DashboardPage,
    Page1,
    Page2,
    EmailSignature,
    EmailTemplate,
    HomeCMS,
    PostComments,
    TalkingTopics,
    TextModerations,
    MeetingNew,
    MeetingManage,
    TrendingInstitutions,
    TrendingCountries,
    TrendingPrograms,
    ProgramNew,
    ProgramEdit,
    AdminDiscussions,

    AccordionPage,
    ManageModel,
    ToStudyItemTable,
    MyAccount,
    ChangePassword,
    Erxian
   } from './views';

import AppsIcon from '@material-ui/icons/Apps';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EqualizerIcon from '@material-ui/icons/Equalizer';
// Icons
import ExploreIcon from '@material-ui/icons/Explore';
import FaceIcon from '@material-ui/icons/Face';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import Looks3Icon from '@material-ui/icons/Looks3';
import Looks4Icon from '@material-ui/icons/Looks4';
import NavigationIcon from '@material-ui/icons/Navigation';
import PagesIcon from '@material-ui/icons/Pages';
import PersonIcon from '@material-ui/icons/Person';
import PhotoIcon from '@material-ui/icons/Photo';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import HomeIcon from '@material-ui/icons/Home';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import TelegramIcon from '@material-ui/icons/Telegram';
import EmailIcon from '@material-ui/icons/Email';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MenuBookIcon from '@material-ui/icons/MenuBook';

export default {
  items: [
    {
      path: '/',
      name: 'Dashboard',
      type: 'link',
      icon: DashboardIcon,
      component: DashboardPage
    },
    {
      path: '/Profile',
      name: 'Profile',
      type: 'submenu',
      icon: AccountCircleIcon,
      children: [
        {
          path: '/MyAccount',
          name: 'Profile Details',
          component: MyAccount
        },
        {
          path: '/ChangePassword',
          name: 'Change Password',
          component: ChangePassword
        }
      ]
    },
    {
      path: '/apps',
      name: 'Home CMS',
      type: 'submenu',
      icon: HomeIcon,
      children: [
        {
          path: '/HomeCMS',
          name: 'Home CMS',
          component: HomeCMS
        },
        {
          path: '/WhatToStudy',
          name: 'What To Study',
          component: ToStudyItemTable
        },
        {
          path: '/ManageModel',
          name: 'Model & Overlays',
          component: ManageModel
        }
      ]
    },
    {
      path: '/apps',
      name: 'Trial Lessons',
      type: 'submenu',
      icon: MenuBookIcon,
      children: [
        {
          path: '/ManageTrialLessons',
          name: 'Manage Booking',
          component: Page1
        },
        {
          path: '/TrialLessons',
          name: 'Edit Booking',
          component: Page2
        }
      ]
    },
    {
      path: '/apps',
      name: 'Discussions',
      type: 'submenu',
      icon: ChatIcon,
      children: [
        {
          path: '/AdminDiscussions',
          name: 'Admin Discussions',
          component: AdminDiscussions
        },
        {
          path: '/PostComments',
          name: 'Post Comments',
          component: PostComments
        },
        {
          path: '/TalkingTopics',
          name: 'Talking Topics',
          component: TalkingTopics
        },
        {
          path: '/TextModerations',
          name: 'Text Moderations',
          component: TextModerations
        }
      ]
    },
    {
      path: '/apps',
      name: 'Meetings',
      type: 'submenu',
      icon: AccessAlarmIcon,
      children: [
        {
          path: '/MeetingNew',
          name: 'New Meeting',
          component: MeetingNew
        },
        {
          path: '/MeetingManage',
          name: 'Manage Meeting',
          component: MeetingManage
        }
      ]
    },
    {
      path: '/apps',
      name: 'Programs',
      type: 'submenu',
      icon: AppsIcon,
      children: [
        {
          path: '/ProgramNew',
          name: 'New Programs',
          component: ProgramNew
        },
        {
          path: '/AccordionPage',
          name: 'Manage Programs',
          component: AccordionPage
        },
        {
          path: '/ProgramEdit',
          name: 'Edit Programs',
          component: ProgramEdit
        }
      ]
    },
    {
      path: '/apps',
      name: 'Email',
      type: 'submenu',
      icon: EmailIcon,
      children: [
        {
          path: '/EmailTemplate',
          name: 'Email Template',
          component: EmailTemplate
        },
        {
          path: '/EmailSignature',
          name: 'Email Signature',
          component: EmailSignature
        }
      ]
    },
    {
      path: '/apps',
      name: 'Erxians',
      type: 'submenu',
      icon: TelegramIcon,
      children: [
        {
          path: '/Erxians',
          name: 'Erxaian',
          component: Erxian
        }
      ]
    }

  ]
};
