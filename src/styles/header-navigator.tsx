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
  padding-top: ${({insets = 0}) => insets - 10}px;
  z-index: 99999;
  background: white;
  flex-direction: row;
  align-items: center;
`;

export const HeaderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  align-items: center;
  width: ${({width = 'auto'}) => width};
  margin: ${({ma = '0'}) => ma};
  margin-left: ${({ml = '0'}) => ml};
  margin-bottom: ${({mb = '0'}) => mb};
  margin-right: ${({mr = '0'}) => mr};
  padding: ${({pa = '10px'}) => pa};
  padding-left: ${({pl = '0'}) => pl};
`;

export const HeaderTitle = styled.Text`
  max-width: 83%;
  font-size: 18px;
  font-weight: 400;
  color: ${({color = '#000'}) => color};
`;
