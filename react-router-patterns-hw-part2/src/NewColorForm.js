import React from "react";
import { Link,  Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import {useState} from 'react';

function NewColorForm({addColor}) {
  const INITIAL_STATE = {
    color: '',
    hex: ''
  }

  const history = useHistory();
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    e.persist();
    const {name, value} = e.target;
    setFormData(formData => ( {
      ...formData,
      [name]: value 
    } ))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor({ [formData.color]: formData.hex });
    //addColor({...formData });
    history.push("/colors");
    setFormData(INITIAL_STATE);
    //return <Redirect to="/colors"/>
  }

  //const {hex, name} = form;
  return (
    <div>
      <h1>Form.</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color</label>
      <input 
        id="color" 
        type="text" 
        name="color"
        placeholder="Enter Color" 
        value={formData.color} 
        onChange={handleChange}
      />
      <label htmlFor="hex">Hex Value</label>
      <input 
        id="hex" 
        type="text" 
        name="hex"
        placeholder="Hex Value"
        value={formData.hex} 
        onChange={handleChange}
      />
      <button>Add Color!</button>
    </form>
    </div>
  );
}

export default NewColorForm;

