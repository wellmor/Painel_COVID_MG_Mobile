import styled from 'styled-components';
import {ICON_MARKER, ICON_BACK} from '../constants/icons';

export const IconMarker = styled(ICON_MARKER).attrs(
  ({width = 25, height = 25, stroke = '#000'}) => {
    return {
      width,
      height,
      stroke,
    };
  },
)`
  margin: ${({ma = 0}) => ma};
  margin-left: ${({ml = 0}) => ml};
  margin-right: ${({mr = 0}) => mr};
  padding: ${({pa = 0}) => pa};
  padding-left: ${({pl = 0}) => pl};
  padding-right: ${({pr = 0}) => pr};
`;

export const IconBack = styled(ICON_BACK).attrs(
  ({width = 25, height = 25, stroke = '#000'}) => {
    return {
      width,
      height,
      stroke,
    };
  },
)`
  margin: ${({ma = 0}) => ma};
  margin-left: ${({ml = 0}) => ml};
  margin-right: ${({mr = 0}) => mr};
  margin-bottom: ${({mb = '5px'}) => mb};
  padding: ${({pa = 0}) => pa};
  padding-left: ${({pl = 0}) => pl};
  padding-right: ${({pr = 0}) => pr};
`;
