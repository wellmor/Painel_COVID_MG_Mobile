import styled from 'styled-components';
import DeviceInfo from 'react-native-device-info';

export const HeaderContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  height: ${DeviceInfo.hasNotch() ? '90px' : '90px'};
  padding: 0 20px;
  padding-top: ${({insets = 0}) => insets + 5}px;
  z-index: 99999;
  background: white;
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
