import React, { useEffect } from "react";

const Modal = ({content, dispatch}) => {
  useEffect(()=>{
    let timer= setTimeout(() => {
      dispatch({type: 'CLOSE_MODAL'})
    }, 3000);
    return ()=>{
      clearTimeout(timer)
    }
  })
  return (
    <div className="modal">
      <p>{content}</p>
    </div>
  );
};

export default Modal;
