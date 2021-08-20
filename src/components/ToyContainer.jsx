import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  const renderToyCards = props.toys.map( (toy, index) => {
      return <li key={index}><ToyCard toy={toy} delete={props.triggerDelete} /></li>  
})
  return(
    <div id="toy-collection">
      {renderToyCards}
    </div>
  );
}

export default ToyContainer;
