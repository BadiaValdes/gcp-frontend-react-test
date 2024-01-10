import { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const FormPortal: FC<PortalProps> = ({ children }) => {
  const portalRoot = document.getElementById('portal-root');

  if (!portalRoot) return null;

  return ReactDOM.createPortal(children, portalRoot);
};

export default FormPortal;
