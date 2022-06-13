import './App.css';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Soda from './Soda';
import Chips from './Chips';
import VendingMachine from './VendingMachine';
import Sardines from './Sardines';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Route exact path="/">
          <VendingMachine/>
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/sardines">
          <Sardines />
        </Route>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
