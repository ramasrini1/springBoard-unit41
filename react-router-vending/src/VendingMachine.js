import React from "react";
import { Link } from "react-router-dom";
import Message from './Message';
import './VendingMachine.css'
import vendingMachineImg from "./VendingMachine.png";
import vendingBg from "./vendingbg.jpeg";

function VendingMachine() {
  return (
    <>
      <div style={{ backgroundColor: 'white' }}>
        <h1>Vending Machine</h1>
        <h4>Pick your favorite food</h4>
      </div>
      
      <div className="VendingMachine"
        style={{ backgroundImage: `url(${vendingBg})` }}>
  
        {/* <Message>
          <h1>I'M A Vending machine what would you like to eat?</h1>
        </Message> */}
        <Message>
          <h1><Link exact to="/soda">Soda</Link></h1>
          <h1><Link exact to="/chips">Chips</Link></h1>
          <h1><Link exact to="/sardines">Fresh Sardines</Link></h1>
        </Message>   
    </div>
    </>
    
  );
}

export default VendingMachine;
