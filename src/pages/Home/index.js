import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <S.InputSearch type="text" placeholder="Pesquise pelo nome..." />

      <S.Header>
        <strong>3 Contatos</strong>

        <a href="/">Novo Contato</a>
      </S.Header>

      <hr />

      <S.ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <S.ListBody>
          {
            [1, 2, 3].map((number) => (
              <li key={number}>
                <S.Card>
                  <S.CardInfo>
                    <div className="contact-name">
                      <strong>Igor Cazé</strong>
                      <small>instagram</small>
                    </div>

                    <span>igorcaze@gmail.com</span>
                    <span>(87) 99999-9999</span>
                  </S.CardInfo>

                  <S.CardActions>
                    <a href="/">
                      <img src={edit} alt="Edit" />
                    </a>

                    <button type="button">
                      <img src={trash} alt="Delete" />
                    </button>
                  </S.CardActions>
                </S.Card>
              </li>
            ))
          }
        </S.ListBody>
      </S.ListContainer>
    </S.Container>
  );
}
