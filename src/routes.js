import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/about/AboutPage';
// import CoursesPage from './components/course/coursesPage';
// import ManageCoursePage from './components/course/ManageCoursePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
