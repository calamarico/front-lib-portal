import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { Theme } from './styles/Theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div>HOLA</div>
    </ThemeProvider>
  );
}

export default App;
