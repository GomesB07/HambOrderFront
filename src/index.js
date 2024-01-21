import React from 'react';
import ReactDOM from 'react-dom/client';
// import Home from './pages/Home';
import Routes from './routes';
import GlobalStyle from './styles/stylesGlobal'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Routes />
    <GlobalStyle />
  </>
);

