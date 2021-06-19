import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ROUTES_TABS_HOME} from '../utils/routes';

import CreateIcon from '../styles/create-icon';

import styled from 'styled-components';

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
            tabBarLabel: ({focused}) => (
              <TabLabel active={focused}>{route?.label}</TabLabel>
            ),
            tabBarIcon: ({focused}) =>
              CreateIcon(route.icon, {
                ...route.iconStyle,
                strokeColor: focused ? '#2C88E8' : '#00000080',
              }),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabsRoutes;
const TabLabel = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${({active}) => (active ? '#2C88E8' : '#00000080')};
`;
