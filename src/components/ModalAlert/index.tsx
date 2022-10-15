import React from 'react';
import {Modal} from 'react-native';

import * as S from './styles';

type ModalAlertProps = {
  visible: boolean;
  handleConfirm: () => void;
  handleClose: () => void;
  data: {
    title: string;
    subtitle: string;
    confirmText: string;
    cancelText: string;
  };
};

const ModalAlert: React.FC<ModalAlertProps> = ({
  visible,
  handleClose,
  handleConfirm,
  data,
}) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={handleClose}
      transparent
      animationType="fade"
    >
      <S.Container>
        <S.Content>
          <S.Title>{data.title}</S.Title>

          <S.Divisor />

          <S.Subtitle>{data.subtitle}</S.Subtitle>

          <S.WrapperButtons>
            <S.ButtonCancel onPress={handleClose}>
              <S.ButtonCancelText>{data.cancelText}</S.ButtonCancelText>
            </S.ButtonCancel>

            <S.ButtonConfirm onPress={handleConfirm}>
              <S.ButtonConfirmText>{data.confirmText}</S.ButtonConfirmText>
            </S.ButtonConfirm>
          </S.WrapperButtons>
        </S.Content>
      </S.Container>
    </Modal>
  );
};

export default ModalAlert;
