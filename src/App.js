import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {

  const [persons, setPersons] = useState(data);


  return (
    <main>
      <List personsData={persons} setPersons={setPersons} />
    </main>
  );

}


export default App;
