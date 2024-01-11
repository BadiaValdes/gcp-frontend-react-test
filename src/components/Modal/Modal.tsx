import './Modal.css';
import {CloseIcon} from '../../utils/Icons/Icons';
import { FC, ReactNode } from 'react';

interface ModalProps{
  title:string;
  background:string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode
}

export const Modal:FC<ModalProps> = ({title, background,  isOpen, onClose, children}) => {
  
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className='modal'>
            <button className="close-button" onClick={onClose}> <CloseIcon/> </button>
            <h2 className="title modal-title">{title}</h2>
            <div className="modal-content">
              {children} 
            </div>
          </div>
        </div>
      )}
    </>
  );
};
