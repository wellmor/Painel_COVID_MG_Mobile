import React from 'react';

import styled from 'styled-components';

const CreateIcon = (
  component,
  {ma = '0', ml = '0', mr = '0', pa = '0', size = 20, strokeColor},
) => {
  const Icon = styled(component).attrs(() => ({
    width: size,
    height: size,
    // fill: fillColor,
    stroke: strokeColor,
  }))`
    margin: ${() => ma};
    margin-left: ${() => ml};
    margin-right: ${() => mr};
    padding: ${() => pa};
  `;
  return <Icon />;
};

export default CreateIcon;
