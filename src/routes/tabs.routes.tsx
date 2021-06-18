import React, {useCallback, useRef, useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ROUTES_TABS_HOME} from '../utils/routes';

import CreateIcon from '../styles/create-icon';

const Tab = createBottomTabNavigator();

const TabsRoutes: React.FC<any> = ({navigation}) => {
  return (
    <Tab.Navigator initialRouteName="HomeScreen">
      {ROUTES_TABS_HOME.map(route => (
        <Tab.Screen
          key={route.index}
          name={route.routeName}
          component={route.screenComponent}
          listeners={{
            tabPress: () => {
              // handleNavigation(route.index);
            },
          }}
          options={{
            tabBarLabel: route.label,
            tabBarIcon: () =>
              CreateIcon(route.icon, {
                ...route.iconStyle,
                strokeColor: 'red',
              }),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabsRoutes;
