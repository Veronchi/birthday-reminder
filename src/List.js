import React from 'react';

function createPersonsList(personsData) {
  const personsList = personsData.map(({ id, name, age, image }) => {
    return (
      <li key={id} className='person'>
        <img src={image} alt='person' />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </li>
    );
  });

  return personsList;

}

const List = ({ personsData, setPersons }) => {

  const personsList = createPersonsList(personsData);

  return (
    <div className='container'>
      <h3>{personsList.length} birthdays today</h3>
      <ul>
        {personsList}
      </ul>
      <button onClick={() => setPersons([])}>Clear All</button>
    </div>
  );
};

export default List;
