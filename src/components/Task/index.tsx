import React from 'react';
import {MaterialCommunityIcons, Octicons} from '@expo/vector-icons';
import {useTheme} from 'styled-components/native';

import {RFValue} from '../../utils/RFValue';
import * as S from './styles';

export type TaskType = {
  id: string;
  description: string;
  done: boolean;
};

type Props = {
  task: TaskType;
  handleToggleDone: () => void;
  handleDelete: () => void;
};

const Task: React.FC<Props> = ({task, handleToggleDone, handleDelete}) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Button onPress={handleToggleDone}>
        <Octicons
          name={task.done ? 'check-circle-fill' : 'circle'}
          size={RFValue(20)}
          color={
            task.done
              ? theme.colors.product.purpleDark
              : theme.colors.product.blue
          }
        />
      </S.Button>

      <S.WrapperTitle>
        <S.Title done={task.done}>{task.description}</S.Title>
      </S.WrapperTitle>

      <S.Button onPress={handleDelete}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={RFValue(20)}
          color={theme.colors.base.danger}
        />
      </S.Button>
    </S.Container>
  );
};

export default Task;
