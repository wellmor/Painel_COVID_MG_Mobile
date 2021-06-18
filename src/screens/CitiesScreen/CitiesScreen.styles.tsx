import styled from 'styled-components';

export const CitiesContainer = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const CitiesSectionList = styled.SectionList.attrs(({insets}) => {
  return {
    bounces: false,
    showsVerticalScrollIndicator: false,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
      paddingBottom: 150,
      marginTop: insets + 46,
    },
  };
})``;

export const CitiesSearchBar = styled.TextInput`
  width: 80%;
  height: 40px;
  padding: 0 2%;
  border-radius: 4px;
  background: #00000009;
  top: -5px;
`;

export const CitiesHeaderItem = styled.View`
  padding: 4% 20px;
  background: white;
  border: 1px solid transparent;
  border-bottom-color: #00000010;
`;

export const CitiesHeaderItemLabel = styled.Text`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
`;

export const CitiesItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: 4% 20px;
  flex-direction: row;
  align-items: center;

  /* flex-direction: row; */
  justify-content: space-between;
  /* align-items: center; */
  /* background: red; */
`;

export const CitiesItemLabel = styled.Text`
  max-width: 80%;
  font-size: 12px;
  color: ${({selected}) => (selected ? '#2C88E8' : '#000')};
`;
