import React, {useLayoutEffect, useCallback} from 'react';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {
  TipsContainer,
  TipsList,
  ListTipsHeaderComponent,
  TipsTitle,
  TipsDescription,
} from './TipsScreen.styles';

import {
  HeaderContainer,
  HeaderButton,
  HeaderTitle,
} from '../../styles/header-navigator';

import {DATA_TIPS} from '../../utils/tips';
import CardTips from '../../components/CardTips/CardTips';

const TipsScreen: React.FC<any> = ({navigation}) => {
  const insets = useSafeAreaInsets();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <HeaderContainer insets={insets.top}>
          <HeaderButton onPress={() => navigation.navigate('CitiesScreen')}>
            <HeaderTitle>Dicas</HeaderTitle>
          </HeaderButton>
        </HeaderContainer>
      ),
    });
  }, []);

  renderItem = useCallback(
    ({item, index}) => <CardTips title={item} index={index} />,
    [],
  );
  keyExtractor = useCallback((item, index) => index.toString(), []);

  getItemLayout = useCallback(
    (item: string, index: number) => ({
      length: 94,
      offset: 94 * index,
      index,
    }),
    [],
  );

  return (
    <TipsContainer insets={insets.top}>
      <TipsList
        data={DATA_TIPS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        disableVirtualization
        initialNumToRender={20}
        maxToRenderPerBatch={20}
        windowSize={10}
        scrollEventThrottle={20}
        automaticallyAdjustContentInsets
        legacyImplementation
        removeClippedSubviews={Platform.OS === 'android'}
        updateCellsBatchingPeriod={20}
        contentInsetAdjustmentBehavior="always"
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="interactive"
        progressViewOffset
        ListHeaderComponent={
          <ListTipsHeaderComponent>
            <TipsTitle>Como se proteger</TipsTitle>
            <TipsDescription>
              As recomendações de prevenção à COVID-19 são as seguintes:
            </TipsDescription>
          </ListTipsHeaderComponent>
        }
      />
    </TipsContainer>
  );
};

export default TipsScreen;
