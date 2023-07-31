import Button from '../Button';

import * as S from './styles';

function Modal() {
  return (
    <S.Overlay>
      <S.Container>
        <S.ModalBody>
          <h1>Titulo do modal</h1>

          <p>Corpo do modal</p>
        </S.ModalBody>

        <S.ModalFooter>
          <button type="button">Cancelar</button>

          <Button type="button">Deletar</Button>
        </S.ModalFooter>
      </S.Container>
    </S.Overlay>
  );
}

export default Modal;
