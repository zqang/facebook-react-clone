import React from 'react';

import {Route, Switch} from 'react-router-dom'
import HomePage from '../page/homepage';
import Header from '../component /header/header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path='/' component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
