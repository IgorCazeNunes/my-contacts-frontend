import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import * as S from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

      <S.Container>
        <h1>My Contacts</h1>
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
