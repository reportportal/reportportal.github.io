import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

export const FooterContent = ({ children }) => {
  const [containerToLoad, setContainerToLoad] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setContainerToLoad(document.getElementById('footer-content'));
  }, []);

  return containerToLoad && createPortal(children, containerToLoad);
};
