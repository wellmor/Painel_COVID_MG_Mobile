import React, {useCallback} from 'react';
import {Text} from 'react-native';
import {useFocusEffect, StackActions} from '@react-navigation/native';

import Store from '../../store';

// import {useThemeState} from '../../contexts/ThemeProvider';
import {useCitySelectedState} from '../../contexts/CitySelectedProvider';
import {SplashContainer} from './SplashScreen.styles';

const SplashScreen: React.FC<any> = ({navigation}) => {
  const handleMountApp = async () => {
    const responseStore = await Store.get('@citySelected');
    if (!JSON.parse(responseStore)) {
      navigation.dispatch(
        StackActions.replace('CitiesScreen', {
          notCitySelected: true,
        }),
      );
    } else {
      navigation.replace('TabsRoutes');
    }
  };

  useFocusEffect(
    useCallback(() => {
      setTimeout(async () => await handleMountApp(), 2000);
    }, []),
  );

  return (
    // <ThemeProvider theme={stateTheme.theme}>
    <SplashContainer>
      <Text>SPLASH SCREEN</Text>
    </SplashContainer>
    // </ThemeProvider>
  );
};

export default SplashScreen;
