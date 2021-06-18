import styled from 'styled-components';

import {ICON_HOME} from '../constants/icons';

export const IconTabProfileDisabled = styled(ICON_HOME).attrs(
  ({theme, size = 25, strokeColor = 'none'}) => ({
    width: size,
    height: size,
    // fill: theme.TAB_ICON_DISABLE,
    stroke: strokeColor,
  }),
)``;
