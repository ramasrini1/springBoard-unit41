import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import {useState} from 'react';
import ColorList from './ColorList';
import FilterColor from './FilterColor';
import NewColorForm from './NewColorForm';

function Routes() {
  const initialColors =  {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF"
  };
  const [colors, setColor] = useState(initialColors);

  const handleAdd = (newColorObj) => {
    setColor(prevColors => ({...prevColors, ...newColorObj }));
    //updateColors(prevColors => ({ ...prevColors, ...newColorObj }));
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors"><ColorList colorChoice={colors} /></Route>
        <Route exact path="/colors/new">
          <NewColorForm addColor={handleAdd} />
        </Route>
        <Route  path="/colors/:color"><FilterColor colorChoices={colors}/></Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;