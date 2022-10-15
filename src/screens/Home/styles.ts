import styled from 'styled-components/native';
import {RFValue} from '../../utils/RFValue';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.base.gray600};
`;

export const WrapperInput = styled.View`
  margin-top: ${RFValue(-27)}px;
`;

export const Content = styled.View`
  padding: 0 ${RFValue(24)}px;
`;

export const WrapperTotals = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: ${RFValue(32)}px ${RFValue(24)}px ${RFValue(20)}px;
`;

export const EmptyListContainer = styled.View`
  flex: 1;
`;

export const EmptyListDivisor = styled.View`
  border-top-width: ${RFValue(1)}px;
  border-top-color: ${({theme}) => theme.colors.base.gray400};
`;

export const EmptyListClipboard = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: ${RFValue(56)}px;
  width: ${RFValue(56)}px;
  align-self: center;
  margin: ${RFValue(48)}px 0 ${RFValue(16)}px;
`;

type EmptyListTitleProps = {
  bold?: boolean;
};

export const EmptyListTitle = styled.Text<EmptyListTitleProps>`
  font-family: ${({bold, theme}) =>
    bold ? theme.fonts.bold : theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(19.6)}px;
  color: ${({theme}) => theme.colors.base.gray300};
  text-align: center;
`;
