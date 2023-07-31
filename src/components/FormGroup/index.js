import propTypes from 'prop-types';

import * as S from './styles';

function FormGroup({ children }) {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
}

FormGroup.propTypes = {
  children: propTypes.node.isRequired,
};

export default FormGroup;
