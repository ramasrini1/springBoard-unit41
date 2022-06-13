import React from "react";
import { Link } from "react-router-dom";

function Chips() {
  return (
    <div>
      <h1>NOM NOM NOM -Chips</h1>
      <img
        src="https://i.giphy.com/VvQvOFqPjZLi.gif"
        alt="Cartoon man eating lots of donuts."
      />
      <p>So tasty!</p>
      <Link exact to="/">Back</Link>
    </div>
  );
}

export default Chips;
