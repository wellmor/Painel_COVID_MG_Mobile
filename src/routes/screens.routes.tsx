import React from 'react';
import {ROUTES_SCREENS_MAIN} from '../utils/routes';
import TabsRoutes from './tabs.routes';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const ScreenRoutes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="TabsRoutes" headerMode="none">
      {ROUTES_SCREENS_MAIN.map(route => (
        <Stack.Screen
          key={route.index}
          name={route.routeName}
          component={route.screenComponent}
        />
      ))}
    </Stack.Navigator>
  );
};

export default ScreenRoutes;
