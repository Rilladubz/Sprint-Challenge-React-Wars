import React, { useEffect, useState } from 'react';
import Card from './components/CharacterCard';
import axios from 'axios';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 75%;
  margin: 0 auto;
`;

const StyledHeader = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  display: flex;
  justify-content: center;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);
  
  console.log('Before/After:', data);

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res);
        const results = res.data.results
        setData(results);
      })
      .catch(err => {
        console.log('Error sorrry try again later.', err);
      })
  }, [])

  return (
    
    <div>
    <StyledHeader>React Wars</StyledHeader>
    <StyledApp>

      {data.map((value, key)=> {

       return(
         <Card value={value} key={key}/>
       )
     })} 

    </StyledApp>
    </div>
  );
}

export default App;

