import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import propTypes from 'prop-types';

import arrow from '../../assets/images/icons/arrow.svg';

import * as S from './styles';

function PageHeader({ title }) {
  return (
    <S.Container>
      <Link to="/">
        <img src={arrow} alt="Back" />
        <span> Voltar </span>
      </Link>

      <h1>{title}</h1>
    </S.Container>
  );
}

PageHeader.propTypes = {
  title: propTypes.string.isRequired,
};

export default PageHeader;
