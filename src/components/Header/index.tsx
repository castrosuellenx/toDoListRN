import React from 'react';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.WrapperLogo>
        <S.LogoImage source={require('../../../assets/rocket.png')} />
        <S.LogoTitle>to</S.LogoTitle>
        <S.LogoTitle colorPurple>do</S.LogoTitle>
      </S.WrapperLogo>
    </S.Container>
  );
};

export default Header;
