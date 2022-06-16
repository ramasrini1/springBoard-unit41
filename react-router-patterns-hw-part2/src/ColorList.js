import React from "react";
import { Link } from "react-router-dom";
//import "./ColorList.css";

function ColorList({colorChoice}) {
  const colorLinks = Object.keys(colorChoice).map(colorName => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));

  return (
    <div className="ColorList">
      <header className="ColorList-header">
        <h1 className="ColorList-title">Welcome to the color factory.</h1>
        <h1>
          <Link to="/colors/new">Add a color</Link>
        </h1>
      </header>
      <div className="ColorList-intro">
        <p>Please select a color.</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
}

export default ColorList;



//import React from "react";
//import { Link,  Redirect } from "react-router-dom";

// function ColorList({colorChoice}) {
  
//   let colorKeys = Object.keys(colorChoice);

//   return (
//     <div>
//       <h1>Welcome to the color factory.</h1>
//       <div className="row mt-4">
//         <div className="col">
//           <h1 className="text-center">
//             Add a color
//           </h1>
//         </div>
//       </div>
//       <div className="row">
//         {colorKeys.map(c => (
//           <div className="col-3 text-center">
//             <h3 className="mt-3">
//               <Link to={`/colors/${c.toLowerCase()}`}>{c}</Link>
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ColorList;

