import React, {useState, useCallback, useLayoutEffect} from 'react';
import {Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useCitySelectedState} from '../../contexts/CitySelectedProvider';

import {HomeContainer} from './HomeScreen.styles';

import {
  HeaderContainer,
  HeaderButton,
  HeaderTitle,
} from '../../styles/header-navigator';

import {IconMarker} from '../../styles/generate-icons';

import Requests from '../../services/api/requests-api';

const HomeScreen: React.FC<any> = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [citySelectedState] = useCitySelectedState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <HeaderContainer insets={insets.top}>
          <HeaderButton onPress={() => navigation.navigate('CitiesScreen')}>
            <IconMarker mr="10px" />
            <HeaderTitle>{citySelectedState?.city_select?.city}</HeaderTitle>
          </HeaderButton>
        </HeaderContainer>
      ),
    });
  }, [citySelectedState]);

  const getData = async () => {
    const responseCities = await Requests.getDataSearchCounty();
    console.log(responseCities);
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );

  return (
    <HomeContainer>
      <Text>HomeScreen</Text>
    </HomeContainer>
  );
};

export default HomeScreen;
