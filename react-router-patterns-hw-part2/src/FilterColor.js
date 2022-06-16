import React from "react";
import { useParams, Redirect } from 'react-router-dom';
import Color from './Color';
import { useHistory } from "react-router-dom";

function FilterColor({colorChoices}) {
  const {color} = useParams();
  let hex = colorChoices[color];
  const history = useHistory();

  if (!hex) return <Redirect to="/colors"/>
  //if (!hex)  history.push("/colors");
  
  return (
    <div>
      <Color color={color} hex={hex} />
    </div>
  );
}

export default FilterColor;
