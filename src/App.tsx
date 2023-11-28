import { ThemeProvider } from '@emotion/react';
import './App.css';
import Router from './routes';
import theme from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
