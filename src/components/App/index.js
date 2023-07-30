import { ThemeProvider } from 'styled-components';

import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import Routes from '../../Routes';

import * as S from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />

        <S.Container>
          <Header />

          <Routes />
        </S.Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
