import './Modal.css';
import {CloseIcon} from '../../utils/Icons/Icons';
import { FC, ReactNode } from 'react';

interface ModalProps{
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode
}

export const Modal:FC<ModalProps> = ({isOpen, onClose, children}) => {
  
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={onClose}> <CloseIcon/> </button>
            <div className="modal-content">
              {children} 
            </div>
          </div>
        </div>
      )}
    </>
  );
};
