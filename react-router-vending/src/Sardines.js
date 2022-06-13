import React from "react";
import { Link } from "react-router-dom";
import Message from './Message';
import './Sardines.css';
import waterbg from "./waterbg.jpeg";
import vendingMachineImg from "./VendingMachine.png";

function Sardines() {
  return (
    <div className="Sardines"
    style={{
      backgroundImage:
        "url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif)"
    }}>
      {/* style={{ backgroundImage: `url(${waterbg})` }}> */}
      {/* style={{ backgroundImage: `url(${waterbg})` }}> */}
      <Message>
        <h1>you don't eat the sardines. the sardines, they eat you!</h1>
        <h1><Link to="/">go back</Link></h1>
      </Message>  
    </div>
  );
}

export default Sardines;