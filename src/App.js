import React, { useState } from 'react';
import './App.css';

function App() {
  const initialData = [
    { id: 1, first_name: "Evelin", last_name: "Adenet", email: "eadenet0@thetimes.co.uk", gender: "Male", fee_balance: 4274 },
    { id: 2, first_name: "Cosme", last_name: "Vollam", email: "cvollam1@netvibes.com", gender: "Male", fee_balance: 2748 },
    { id: 3, first_name: "Worthington", last_name: "McKiddin", email: "wmckiddin2@e-recht24.de", gender: "Male", fee_balance: 4578 },
    { id: 4, first_name: "Noel", last_name: "Whybrow", email: "nwhybrow3@reuters.com", gender: "Male", fee_balance: 2315 },
    { id: 5, first_name: "Danella", last_name: "Skehan", email: "dskehan4@cnn.com", gender: "Female", fee_balance: 2193 },
    { id: 6, first_name: "Shanta", last_name: "Hentzeler", email: "shentzeler5@sakura.ne.jp", gender: "Female", fee_balance: 4290 },
    { id: 7, first_name: "Scotti", last_name: "Pigeram", email: "spigeram6@vinaora.com", gender: "Male", fee_balance: 4191 },
    { id: 8, first_name: "Ludovico", last_name: "Hurren", email: "lhurren7@dailymotion.com", gender: "Genderfluid", fee_balance: 4712 },
    { id: 9, first_name: "Cale", last_name: "Kapelhoff", email: "ckapelhoff8@com.com", gender: "Male", fee_balance: 2498 },
    { id: 10, first_name: "Stephi", last_name: "Kember", email: "skember9@unc.edu", gender: "Female", fee_balance: 748 }
  ];

  const [data, setData] = useState(initialData);

  const deletePerson = (id) => {
    setData(data.filter(person => person.id !== id));
  };

  const addPerson = (newPerson) => {
    setData([...data, { ...newPerson, id: data.length + 1 }]);
  };

  const updatePerson = (id, updatedInfo) => {
    setData(data.map(person => person.id === id ? { ...person, ...updatedInfo } : person));
  };

  return (
    <div className="App">
      <h1>Users</h1>
      {data.map((person) => (
        <div key={person.id}>
          <p>{person.first_name} {person.last_name}</p>
          <p>Email: {person.email}</p>
          <p>Gender: {person.gender}</p>
          <p>Fee Balance: {person.fee_balance}</p>
          <button onClick={() => deletePerson(person.id)}>Delete</button>
          <button onClick={() => updatePerson(person.id, { fee_balance: person.fee_balance + 100 })}>Increase Fee</button>
        </div>
      ))}
      <button onClick={() => addPerson({ first_name: "New", last_name: "User", email: "newuser@example.com", gender: "Non-binary", fee_balance: 500 })}>
        Add New User
      </button>
    </div>
  );
}

export default App;