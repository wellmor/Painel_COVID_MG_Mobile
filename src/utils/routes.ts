/**
 *  Routes files
 */
import TabsRoutes from '../routes/tabs.routes'
import HomeRoutes from '../routes/home.routes'
import TipsRoutes from '../routes/tips.routes'
import AboutRoutes from '../routes/about.routes'
import DonatesRoutes from '../routes/donates.routes'

/**
 *  Screens files
 */
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen'
import CitiesScreen from '../screens/CitiesScreen'
import TipsScreen from '../screens/TipsScreen'

/**
 *  Icons tabs
 */

import {ICON_HOME, ICON_TIPS, ICON_ABOUT, ICON_DONATES} from '../constants/icons'


export const ROUTES_SCREENS_MAIN = [
  {
    index: 0,
    routeName: 'SplashScreen',
    screenComponent: SplashScreen,
  },
  {
    index: 1,
    routeName: 'TabsRoutes',
    screenComponent: TabsRoutes,
  },
  {
    index: 3,
    routeName: 'CitiesScreen',
    screenComponent: CitiesScreen,
  },
];

export const ROUTES_TABS_HOME = [
  {
    index: 0,
    routeName: 'HomeRoutes',
    label: 'Home',
    screenComponent: HomeRoutes,
    icon: ICON_HOME,
    iconStyle: {
      size: '25px',
    },
  },

  {
    index: 2,
    routeName: 'TipsRoutes',
    screenComponent: TipsRoutes,
    icon: ICON_TIPS,
    iconStyle: {
      size: '25px',
    },
  },

  {
    index: 3,
    routeName: 'AboutRoutes',
    screenComponent: AboutRoutes,
    icon: ICON_ABOUT,
    iconStyle: {
      size: '25px',
    },
  },

  {
    index: 4,
    routeName: 'DonatesRoutes',
    screenComponent: DonatesRoutes,
    icon: ICON_DONATES,
    iconStyle: {
      size: '25px',
    },
  },
];

export const ROUTES_HOME = [
  {
    index: 1,
    routeName: 'HomeScreen',
    screenComponent: HomeScreen,
  },
]

export const ROUTES_TIPS = [
  {
    index: 1,
    routeName: 'TipsScreen',
    screenComponent: TipsScreen,
  },
]

export const ROUTES_ABOUT = [
  {
    index: 1,
    routeName: 'HomeScreen',
    screenComponent: HomeScreen,
  },
]

export const ROUTES_DONATES = [
  {
    index: 1,
    routeName: 'HomeScreen',
    screenComponent: HomeScreen,
  },
]