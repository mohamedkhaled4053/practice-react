// import React, { useState, useReducer } from "react";
// import Modal from "./Modal";
// import { data } from "../../../data";
// // reducer function

// const Index = () => {
//   let [people, setPeople] = useState(data);
//   let [name, setName] = useState('');
//   let [modal, setModal] = useState(false);

//   console.log('ddd');

//   function handlesubmit(e) {
//     e.preventDefault();
//     if(name.trim()){
//       setPeople([...people, {id: new Date().getTime().toString(), name}]);
//     }else{
//       setModal(true)
//     }
//     setName('')
//   }

//   return (
//     <div className="container">
//       {modal && <Modal />}

//       <form className="form" onSubmit={handlesubmit}>
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <button type="submit">add</button>
//       </form>
//       {people.map((item) => (
//         <div key={item.id} className="item">
//           <h4>{item.name}</h4>
//           <button onClick={() => setPeople(people.filter((i) => i.id !== item.id))}>
//             remove
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Index;

import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";
// reducer function

let initState = {
  people: data,
  modal: "",
};

const Index = () => {
  let [name, setName] = useState("");
  let [state, dispatch] = useReducer(reducer, initState);

  function handlesubmit(e) {
    e.preventDefault();
    if (name.trim()) {
      let newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
    } else {
      dispatch({ type: "NO_INPUT" });
    }
    setName("");
  }



  return (
    <div className="container">
      {state.modal && <Modal content={state.modal} dispatch={dispatch}/>}

      <form className="form" onSubmit={handlesubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((item) => (
        <div key={item.id} className="item">
          <h4>{item.name}</h4>
          <button onClick={() => dispatch({type: 'DELETE',payload: item.id})}>remove</button>
        </div>
      ))}
    </div>
  );
};

export default Index;
