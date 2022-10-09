import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  padding: 0 ${RFValue(24)}px;
`;

type InputFormProps = {
  focused: boolean;
};

export const InputForm = styled.TextInput<InputFormProps>`
  flex: 1;
  height: ${RFValue(54)}px;

  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(22.4)}px;
  color: ${({theme}) => theme.colors.base.gray100};

  border-width: ${RFValue(1)}px;
  border-color: ${({theme, focused}) =>
    focused ? theme.colors.product.purpleDark : theme.colors.base.gray700};
  border-radius: ${RFValue(6)}px;
  margin-right: ${RFValue(4)}px;
  padding-left: ${RFValue(16)}px;
  background-color: ${({theme}) => theme.colors.base.gray500};
`;

export const ButtonAdd = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: ${RFValue(52)}px;
  width: ${RFValue(52)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(6)}px;
  background-color: ${({theme}) => theme.colors.product.blueDark};
`;
