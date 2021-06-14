import React from 'react';
import Route from './routes/routes'
import {Provider} from "react-redux";
import store from "./store";
import GlobalStyles from './styles/GlobalStyles';
import {ThemeProvider} from "styled-components";
import dark from "./styles/thems/dark";
import { TestProvider } from './context/test';


function App() {

  return (
    <div>
      <TestProvider>
    <Provider store={store}>
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Route/>
        </ThemeProvider>
    </Provider>
    </TestProvider>
</div>

  );
}

export default App;

