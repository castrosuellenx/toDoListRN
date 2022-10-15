import styled from 'styled-components/native';
import {RFValue} from '../../utils/RFValue';

export const Container = styled.View`
  flex-direction: row;
  height: ${RFValue(64)}px;
  width: 100%;
  align-items: center;
  border-width: ${RFValue(1)}px;
  border-color: ${({theme}) => theme.colors.base.gray400};
  border-radius: ${RFValue(8)}px;
  margin-bottom: ${RFValue(8)}px;
  padding: 0 ${RFValue(12)}px;
  background-color: ${({theme}) => theme.colors.base.gray500};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const WrapperTitle = styled.View`
  flex: 1;
  margin: 0 ${RFValue(10)}px;
`;

type TitleProps = {
  done: boolean;
};

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})<TitleProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(19.8)}px;
  color: ${({theme}) => theme.colors.base.gray100};
  text-decoration: ${({done}) => (done ? 'line-through' : 'none')};
`;
