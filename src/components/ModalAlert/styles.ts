import styled from 'styled-components/native';
import {RFValue} from '../../utils/RFValue';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(13, 13, 13, 0.4);
`;

export const Content = styled.View`
  width: 70%;
  min-height: ${RFValue(200)}px;
  border-radius: ${RFValue(20)}px;
  padding: ${RFValue(24)}px;
  background-color: ${({theme}) => theme.colors.base.gray500};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(19.6)}px;
  color: ${({theme}) => theme.colors.base.gray100};
  margin-bottom: ${RFValue(12)}px;
`;

export const Divisor = styled.View`
  border-top-width: ${RFValue(1)}px;
  border-top-color: ${({theme}) => theme.colors.base.gray400};
`;

export const Subtitle = styled.Text`
  flex: 1;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(19.6)}px;
  color: ${({theme}) => theme.colors.base.gray100};
  margin-top: ${RFValue(12)}px;
`;

export const WrapperButtons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const ButtonConfirm = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  border-radius: ${RFValue(6)}px;
  padding: ${RFValue(6)}px ${RFValue(24)}px;
  background-color: ${({theme}) => theme.colors.product.blue};
`;

export const ButtonConfirmText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.base.gray100};
`;

export const ButtonCancel = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  border-radius: ${RFValue(6)}px;
  margin-right: ${RFValue(18)}px;
  padding: ${RFValue(6)}px ${RFValue(12)}px;
  background-color: ${({theme}) => theme.colors.base.gray400};
`;

export const ButtonCancelText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.base.gray300};
`;
