import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  height: ${RFValue(173)}px;
  align-items: center;
  justify-content: center;
  padding-top: ${RFValue(6.85)}px;
  background-color: ${({theme}) => theme.colors.base.gray700};
`;

export const WrapperLogo = styled.View`
  flex-direction: row;
`;

export const LogoImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: ${RFValue(31.92)}px;
  width: ${RFValue(19.48)}px;
  margin-right: ${RFValue(11.18)}px;
`;

type LogoTitleProps = {
  colorPurple?: boolean;
};

export const LogoTitle = styled.Text<LogoTitleProps>`
  font-family: ${({theme}) => theme.fonts.black};
  font-size: ${RFValue(36)}px;
  line-height: ${RFValue(36)}px;
  color: ${({theme, colorPurple}) =>
    colorPurple ? theme.colors.product.purpleDark : theme.colors.product.blue};
`;
