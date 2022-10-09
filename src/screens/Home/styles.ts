import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.base.gray600};
`;

export const WrapperInput = styled.View`
  margin-top: ${RFValue(-27)}px;
`;
