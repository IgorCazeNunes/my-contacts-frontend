import propTypes from 'prop-types';
import Button from '../Button';

import * as S from './styles';

function Modal({ danger }) {
  return (
    <S.Overlay>
      <S.Container danger={danger}>
        <S.ModalBody>
          <h1>Titulo do modal</h1>

          <p>Corpo do modal</p>
        </S.ModalBody>

        <S.ModalFooter>
          <button type="button">Cancelar</button>

          <Button type="button" danger={danger}>Deletar</Button>
        </S.ModalFooter>
      </S.Container>
    </S.Overlay>
  );
}

Modal.propTypes = {
  danger: propTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};

export default Modal;
