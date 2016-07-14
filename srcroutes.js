import React from 'react';
import { Router, IndexRoute} from 'react-router';
import App from './Components/App';
import HomePage from './Components/home/HomePage';
import AboutPage from './Components/about/AboutPage';

export defualt (
  <Route path="/" component={App}>
  <IndexRoute component={HomePage} />
  <Route path="about" component={AboutPage} />
  </Route>
)
