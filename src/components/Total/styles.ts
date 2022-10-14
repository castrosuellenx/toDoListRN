import styled from 'styled-components/native';
import {RFValue} from '../../utils/RFValue';

export const Container = styled.View`
  flex-direction: row;
`;

type LabelProps = {
  textColor: string;
};

export const Label = styled.Text<LabelProps>`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16.94)}px;
  color: ${({textColor, theme}) => textColor || theme.colors.base.gray100};
  margin-right: ${RFValue(8)}px;
`;

export const CircleValue = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(100)}px;
  padding: ${RFValue(2)}px ${RFValue(8)}px;
  background-color: ${({theme}) => theme.colors.base.gray400};
`;

export const Value = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(14.52)}px;
  color: ${({theme}) => theme.colors.base.gray200};
`;
