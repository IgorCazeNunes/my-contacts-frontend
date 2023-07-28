import * as S from './styles';

import logo from '../../assets/images/logo.svg';

function Header() {
  return (
    <S.Container>
      <img src={logo} alt="MyContacts" />

      <S.InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </S.InputSearchContainer>
    </S.Container>
  );
}

export default Header;
