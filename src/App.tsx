

import { ThemeProvider } from 'styled-components';
import './App.css';
import Routes from './routes/routes';
import GlobalStyles from './styles/GlobalStyles';
import ligth from './styles/thems/ligth';

function App() {
  
    return (
      <div>
          <ThemeProvider theme={ligth}>
              <GlobalStyles />
              <Routes/>
          </ThemeProvider>
 
     
  </div>
  );
}

export default App;
