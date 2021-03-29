import React from 'react';
import Route from './routes/routes'
import {Provider} from "react-redux";
import store from "./store";
import GlobalStyles from './styles/GlobalStyles';
import {ThemeProvider} from "styled-components";
import dark from "./styles/thems/dark";

function App() {

  return (
    <div>
    <Provider store={store}>
        <ThemeProvider theme={dark}>
            <GlobalStyles />
            <Route/>
        </ThemeProvider>
    </Provider>
</div>

  );
}

export default App;

