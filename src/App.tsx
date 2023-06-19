import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { Theme } from './styles/Theme';
import Search from './components/Search/search';
import * as Styles from './styles';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Styles.TopBar>
        <Search />
      </Styles.TopBar>
    </ThemeProvider>
  );
}

export default App;
