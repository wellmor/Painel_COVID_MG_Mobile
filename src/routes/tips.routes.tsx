import React from 'react';
import {ROUTES_TIPS} from '../utils/routes';
import TabsRoutes from './tabs.routes';

import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const TipsRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleAlign: 'center',
      }}>
      {ROUTES_TIPS.map(route => (
        <Stack.Screen
          key={route.index}
          name={route.routeName}
          component={route.screenComponent}
        />
      ))}
    </Stack.Navigator>
  );
};

export default TipsRoutes;
