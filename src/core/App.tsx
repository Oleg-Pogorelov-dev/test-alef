import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Style from './style';
import Home from '../pages/Home';
import Header from '../components/Header';
import Preview from '../pages/Preview';
import Footer from '../components/Footer';

function App() {
  return (
    <Style>
      <Router>
        <Header />
        <Switch>
          <Route path="/preview">
            <Preview />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Style>
  );
}

export default App;
