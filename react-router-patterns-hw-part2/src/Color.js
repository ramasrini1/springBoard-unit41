//import "./DogDetails.css";
import { Link, Redirect } from "react-router-dom";
import { useParams } from 'react-router-dom';
import "./Color.css";
//import DogDetails from './DogDetails';

function Color({color, hex}) {

  //const {color} = useParams();
  //console.log("color is " + color[0]);
  //if (!dog) return <Redirect to="/dogs"/>

  return (
    <div className="color"
      style={{ backgroundColor: hex }}
    >
      <h2>{color}</h2>
      <h4><Link to="/colors">Go Back</Link></h4>
    </div>
  );
}

export default Color;


