import React, {useState} from 'react';
import {TextInputProps} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useTheme} from 'styled-components/native';

import {RFValue} from '../../utils/RFValue';
import * as S from './styles';

type Props = {
  handlePressAdd: () => void;
} & TextInputProps;

const Input: React.FC<Props> = ({handlePressAdd, ...res}) => {
  const theme = useTheme();

  const [focused, setFocused] = useState(false);

  return (
    <S.Container>
      <S.InputForm
        placeholder="Add a new task"
        placeholderTextColor={theme.colors.base.gray300}
        focused={focused}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...res}
      />

      <S.ButtonAdd onPress={() => handlePressAdd()}>
        <Ionicons
          name="add-circle-outline"
          size={RFValue(20)}
          color={theme.colors.base.gray100}
        />
      </S.ButtonAdd>
    </S.Container>
  );
};

export default Input;
