import styled from 'styled-components';

export const HeaderContainer = styled.View`
  min-width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  width: 83%;
  font-size: 18px;
  font-weight: 400;
  color: ${({color = '#000'}) => color};
`;
