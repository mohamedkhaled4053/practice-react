import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)
let testing = React.createContext()

const ContextAPI = () => {
  const [people, setPeople] = useState(data);



  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <testing.Provider value={{removePerson}}>
      <h3>prop drilling</h3>
      <List people={people}  />
    </testing.Provider>
  );
};

const List = ({ people,  }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {

  let {removePerson} = useContext(testing)

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
