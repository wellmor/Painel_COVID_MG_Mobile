import styled from 'styled-components';

export const CardTipsContainer = styled.View`
  width: 90%;
  min-height: 80px;
  margin: 2px auto;
  /* background: #ffffff; */
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
`;

export const CardTipsWrapperNumber = styled.View`
  width: 50px;
  height: 50px;
  /* background-color: #2c88e8; */
  border-radius: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border: 1px dashed #2c88e8;
`;

export const CardTipsNumber = styled.Text`
  font-size: 18px;
  color: #2c88e8;
`;

export const CardTipsLabel = styled.Text`
  font-size: 12px;
  max-width: 80%;
`;
