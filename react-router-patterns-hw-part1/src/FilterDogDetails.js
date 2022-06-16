import React from "react";
import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';

function FilterDogDetails({dogs}) {
  const {name} = useParams();

  let dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());
  return (
    <div>
      <DogDetails dog={dog} />
    </div>
  );
}

export default FilterDogDetails;
