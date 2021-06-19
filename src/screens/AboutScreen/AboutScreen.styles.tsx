import styled from 'styled-components';
import {Platform} from 'react-native';

export const AboutContainer = styled.ScrollView.attrs({
  bounces: false,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingVertical: 70,
    paddingBottom: Platform.OS === 'ios' ? 30 : 80,
    paddingTop: Platform.OS === 'ios' ? 15 + 90 : 110,
    position: 'relative',
    paddingHorizontal: 20,
  },
})`
  flex: 1;
  background-color: #e0e0e0;
`;

export const AboutTitle = styled.Text`
  font-size: 20px;
  color: #000;
  font-weight: 700;
  margin-top: ${({ma = 0}) => ma};
`;

export const AboutDescription = styled.Text`
  font-size: 12px;
  color: #6e777f;
`;

export const AboutParagraph = styled.Text`
  font-size: 13px;
  margin-top: 10px;
`;
