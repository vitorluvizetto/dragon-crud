import React from "react";

import "./styles.scss";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  title,
}): React.ReactElement | null => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-overlay__modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`modal-overlay__modal-content__close ${className}`}>
          <h3>{title}</h3>
          <button onClick={onClose}>X</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
