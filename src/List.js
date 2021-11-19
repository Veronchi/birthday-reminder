import React from 'react';

const List = ({ personsList }) => {
  console.log(personsList)

  const person = personsList.map(({ id, name, age, image }) => {
    return (
      <li key={id} className='person'>
        <img src={image} alt='person' />
        <div>
          <h4>{name}</h4>
          <p>{age} years</p>
        </div>
      </li>
    );
  })

  return (
    <div className='container'>
      <h3>{personsList.length} birthdays today</h3>
      <ul>
        {person}
      </ul>
      <button>Clear All</button>
    </div>
  );
};

export default List;
