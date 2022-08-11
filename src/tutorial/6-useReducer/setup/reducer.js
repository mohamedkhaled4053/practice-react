export function reducer(state, action) {
  if (action.type === "ADD_ITEM") {
    let newPeople = [...state.people, action.payload];
    return { ...state, people: newPeople, modal: "item added" };
  } else if (action.type === "NO_INPUT") {
    return { ...state, modal: "please add" };
  } else if (action.type === "DELETE") {
    let newPeople = state.people.filter(item => item.id !== action.payload);
    return { ...state, modal: "deleted", people: newPeople };
  } else if (action.type === "CLOSE_MODAL") {
    return { ...state, modal: "" };
  } else {
    throw Error("error");
  }
}
