import React from 'react';
import './List.css'
import Item from './Item';

function List({ data, deletePerson, updatePerson }) {
  return (
    <div>
      {data.map(person => (
        <Item key={person.id} person={person} deletePerson={deletePerson} updatePerson={updatePerson} />
      ))}
    </div>
  );
}

export default List;