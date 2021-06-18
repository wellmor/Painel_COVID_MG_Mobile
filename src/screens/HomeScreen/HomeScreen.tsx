import React, {useState, useCallback} from 'react';
import {View, Text} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import {HomeContainer} from './HomeScreen.styles';

const HomeScreen: React.FC<any> = ({navigation}) => {
  const getData = async () => {
    navigation.setOptions({
      headerShown: true,
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
