import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Home />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
