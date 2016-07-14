import React from 'react';
import { Header } from './components/header/header.js';
import { Footer } from './components/footer/footer.js';
import { render } from 'react-dom';
render(
  <Header />,<Footer />,
  document.getElementById('app')
);
