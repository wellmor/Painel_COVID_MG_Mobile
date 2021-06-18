import styled from 'styled-components';
import {Platform} from 'react-native';

export const TipsContainer = styled.View`
  flex: 1;
  background-color: #e0e0e0;
`;

export const TipsList = styled.FlatList.attrs({
  bounces: false,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingVertical: 70,
    paddingBottom: Platform.OS === 'ios' ? 30 : 80, // ios 60
    paddingTop: Platform.OS === 'ios' ? 65 : 110, // ios nao tinha
    position: 'relative',
  },
})``;

export const ListTipsHeaderComponent = styled.View`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const TipsTitle = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: 700;
`;

export const TipsDescription = styled.Text`
  font-size: 12px;
  color: #6e777f;
`;
