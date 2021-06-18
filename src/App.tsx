import React, {useCallback, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import Store from './store';
import {useCitySelectedState} from './contexts/CitySelectedProvider';

const App = () => {
  // const [, citySelectDispach] = useCitySelectedState();

  // const setCitySelect = async () => {
  //   const responseCitySelected = await Store.get('@citySelected');
  //   if (responseCitySelected) {
  //     citySelectDispach({
  //       type: 'CHANGE_CITY_SELECTED',
  //       city_select: JSON.parse(responseCitySelected),
  //     });
  //   }
  // };

  // useEffect(
  //   useCallback(() => {
  //     setCitySelect();
  //   }, []),
  //   [],
  // );
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};
export default App;
