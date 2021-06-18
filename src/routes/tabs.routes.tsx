import React, {useCallback, useRef, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ROUTES_TABS_HOME} from '../utils/routes';

const Tab = createBottomTabNavigator();

const TabsRoutes: React.FC = ({navigation}: Props) => {
  const indexScreenFocusRef = useRef(0);

  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      {ROUTES_TABS_HOME.map(route => (
        <Tab.Screen
          key={route.index}
          name={route.routeName}
          component={route.screenComponent}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabsRoutes;
