import React from 'react';

import * as S from './styles';

type Props = {
  label: string;
  value: number;
  textColor: string;
};

const Total: React.FC<Props> = ({label, value, textColor}) => {
  return (
    <S.Container>
      <S.Label textColor={textColor}>{label}</S.Label>

      <S.CircleValue>
        <S.Value>{value}</S.Value>
      </S.CircleValue>
    </S.Container>
  );
};

export default Total;
