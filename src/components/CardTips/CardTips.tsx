import React from 'react';
import {Props} from './CardTips.types';

import {
  CardTipsContainer,
  CardTipsWrapperNumber,
  CardTipsNumber,
  CardTipsLabel,
} from './CardTips.styles';

const CardTips: React.FC<Props> = ({title, index}) => {
  return (
    <CardTipsContainer>
      <CardTipsWrapperNumber>
        <CardTipsNumber>{index + 1}</CardTipsNumber>
      </CardTipsWrapperNumber>
      <CardTipsLabel>{title}</CardTipsLabel>
    </CardTipsContainer>
  );
};

export default CardTips;
