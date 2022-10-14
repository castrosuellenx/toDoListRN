import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.base.gray600};
`;

export const WrapperInput = styled.View`
  margin-top: ${RFValue(-27)}px;
`;

export const WrapperTotals = styled.View`
  flex-direction: row;
  margin: ${RFValue(32)}px 0 ${RFValue(20)}px;
  background-color: red;
`;

export const WrapperTotal = styled.View`
  flex-direction: row;
  background-color: pink;
`;

export const TotalLabel = styled.Text``;

export const CircleTotalValue = styled.View``;

export const TotalValue = styled.Text``;
