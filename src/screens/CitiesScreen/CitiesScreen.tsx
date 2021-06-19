import React, {useState, useCallback, useLayoutEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useCitySelectedState} from '../../contexts/CitySelectedProvider';

import Store from '../../store';
import Requests from '../../services/api/requests-api';

import {isEqual, isEmpty, reject} from 'lodash';

import {
  CitiesContainer,
  CitiesSectionList,
  CitiesItem,
  CitiesItemLabel,
  CitiesHeaderItem,
  CitiesHeaderItemLabel,
  CitiesSearchBar,
} from './CitiesScreen.styles';

import {
  HeaderContainer,
  HeaderButton,
  HeaderTitle,
} from '../../styles/header-navigator';

import {IconMarker, IconBack} from '../../styles/generate-icons';

const CitiesScreen: React.FC<any> = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const [citySelectedState, dispachCitySelectedState] = useCitySelectedState();
  const [isLoading, setIsLoading] = useState(false);
  const [cities, setCities] = useState(null);
  const [citiesFilter, setCitiesFilter] = useState(null);
  const [citySelect, setCitySelect] = useState(null);

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await Requests.getDataSearchCounty();
      setCities(response);
      setCitiesFilter(response);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      setCitySelect(citySelectedState.city_select || null);
      getData();
    }, []),
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <HeaderContainer insets={insets.top}>
          {citySelect && (
            <HeaderButton
              mb="3px"
              ml="-10px"
              onPress={() => navigation.goBack()}>
              <IconBack width={40} height={40} />
            </HeaderButton>
          )}
          <CitiesSearchBar
            citySelect={citySelect}
            onChangeText={value => handleFilterCities(value)}
          />
        </HeaderContainer>
      ),
    });
  }, [citiesFilter, citySelect]);

  const renderItem = useCallback(
    ({item}) =>
      item?.id &&
      item?.city && (
        <CitiesItem
          selected={isEqual(citySelect?.id, item?.id)}
          onPress={() => citySelect?.id !== item?.id && handleSelectCity(item)}>
          <CitiesItemLabel selected={isEqual(citySelect?.id, item?.id)}>
            {item?.city}
          </CitiesItemLabel>
          {isEqual(citySelect?.id, item.id) && (
            <IconMarker width={20} height={20} stroke={'#2C88E8'} />
          )}
        </CitiesItem>
      ),
    [citiesFilter],
  );

  const keyExtractor = useCallback((item, index) => item + index, []);

  const renderSectionHeader = useCallback(({section: {title, data}}) => {
    if (title && data.length) {
      return (
        <CitiesHeaderItem>
          <CitiesHeaderItemLabel>{title}</CitiesHeaderItemLabel>
        </CitiesHeaderItem>
      );
    }
  });

  const handleFilterCities = value => {
    if (value !== '' && value.trim() !== '') {
      const filter = cities?.map((county, index) => {
        const filterData = county?.data?.filter(item => {
          if (item?.city?.toLowerCase()?.includes(value?.toLowerCase())) {
            return county;
          }
        });
        return {title: county?.title, data: filterData};
      });
      setCitiesFilter(filter);
    } else {
      setCitiesFilter(cities);
    }
  };

  const handleSelectCity = useCallback(
    async item => {
      dispachCitySelectedState({
        type: 'CHANGE_CITY_SELECTED',
        city_select: item,
      });
      setCitySelect(item);
      navigation.replace('TabsRoutes');
    },
    [citySelect],
  );

  return (
    <CitiesContainer>
      <CitiesSectionList
        insets={insets.top}
        sections={citiesFilter}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        automaticallyAdjustContentInsets={false}
        stickySectionHeadersEnabled
        removeClippedSubviews
        initialNumToRender={40}
        disableVirtualization
      />
    </CitiesContainer>
  );
};

export default CitiesScreen;
