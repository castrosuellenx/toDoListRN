import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components/native';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Total from '../../components/Total';
import * as S from './styles';

const Home: React.FC = () => {
  const theme = useTheme();
  const [taskDescription, setTaskDescription] = useState('');

  return (
    <S.Container>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={theme.colors.base.gray700}
      />

      <Header />

      <S.WrapperInput>
        <Input
          value={taskDescription}
          onChangeText={setTaskDescription}
          handlePressAdd={() => console.log('Pressed')}
        />
      </S.WrapperInput>

      <S.WrapperTotals>
        <Total
          label="Criadas"
          value={0}
          textColor={theme.colors.product.blue}
        />

        <Total
          label="Concluídas"
          value={0}
          textColor={theme.colors.product.purple}
        />
      </S.WrapperTotals>
    </S.Container>
  );
};

export default Home;
