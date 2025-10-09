import ReactDom from 'react-dom';
import { useEffect, useState } from 'react';

export default function ModalPortal({ children }) {
  const [element, setElement] = useState(null);

  useEffect(() => {
    let modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
      modalRoot = document.createElement('div');
      modalRoot.setAttribute('id', 'modal-root');
      document.body.appendChild(modalRoot);
    }
    setElement(modalRoot);
  }, []);

  if (!element) return null;
  return ReactDom.createPortal(children, element);
}
