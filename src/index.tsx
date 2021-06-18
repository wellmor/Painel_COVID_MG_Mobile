import 'react-native-gesture-handler';
import React from 'react';
import {TextInput, Text} from 'react-native';
import {CitySelectedContextProvider} from './contexts/CitySelectedProvider';

import App from './App';
import Store from './store';
// import lightTheme from './themes/light';
// import darkTheme from './themes/dark';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

const Index = () => {
  // const initialStateTheme = {theme: lightTheme};
  const initialStateCity = {};

  const updateStorage = async (key: string, state) => {
    try {
      await Store.set(key, state);
    } catch (err) {
      console.log(key, err);
    }
  };

  // const reducerTheme = (state, action) => {
  //   switch (action.type) {
  //     case 'ENABLE_DARKMODE':
  //       updateStorage('@darkmode', 'true');
  //       return {...state, theme: darkTheme};
  //     case 'DISABLE_DARKMODE':
  //       updateStorage('@darkmode', 'false');
  //       return {...state, theme: lightTheme};
  //     default:
  //       return state;
  //   }
  // };

  const reducerCitySelected = (state, action) => {
    switch (action.type) {
      case 'CHANGE_CITY_SELECTED':
        if (action?.city_select) {
          updateStorage('@citySelected', JSON.stringify(action?.city_select));
        }
        return {...state, city_select: action?.city_select};
      default:
        return state;
    }
  };

  return (
    // <ThemeContextProvider
    //   initialState={initialStateTheme}
    //   reducer={reducerTheme}>
    <CitySelectedContextProvider
      initialState={initialStateCity}
      reducer={reducerCitySelected}>
      <App />
    </CitySelectedContextProvider>
    // </ThemeContextProvider>
  );
};

export default Index;
