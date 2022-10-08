import React from 'react';
import {StatusBar} from 'react-native';
import {useTheme} from 'styled-components/native';

import Header from '../../components/Header';
import * as S from './styles';

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={theme.colors.base.gray700}
      />

      <Header />
    </S.Container>
  );
};

export default Home;
