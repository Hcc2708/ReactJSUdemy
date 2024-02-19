import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal( {children, open, onClose} ) {
  const dialog = useRef();
  
  useEffect(()=>{
    if(open)
    {
      dialog.current.showModal()
    }
    else 
    {
      dialog.current.close()
    }}, [open])

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose} >  {/* though this dialog is not visible by default but it is actually connected to the dom (unless you are not using conditional rendering) and the code written inside it is already excuted as well. and this will be visible once you call showModal(), and therefore if you won't use the conditional rendering for the below child the timeout set for 3 seconds int its children will be executed right away after the 3 seconds of starting of your application.*/}
      {open && children} {/* now here the children will be executed only when the open is true */}
    {/* <form method='dialog' >
      <button onClick={onClose}>Close</button>
    </form> */}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
