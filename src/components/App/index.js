import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';

import * as S from './styles';
import ContactsList from '../ContactsList';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <S.Container>
        <Header />

        <ContactsList />
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
