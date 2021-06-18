import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {HomeContainer} from './HomeScreen.styles';

import {
  HeaderContainer,
  HeaderButton,
  HeaderTitle,
} from '../../styles/header-navigator';

const HomeScreen: React.FC<any> = ({navigation}) => {
  const getData = async () => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: (
        <HeaderContainer>
          <HeaderButton>
            {/* <HeaderIconMarker/> */}
            <HeaderTitle>Rio Pomba</HeaderTitle>
          </HeaderButton>
        </HeaderContainer>
      ),
    });
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
