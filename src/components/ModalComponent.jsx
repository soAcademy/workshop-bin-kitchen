import React from "react";

const Modal = (props) => {
    return (
      <div>
        {props.showBackdrop && (
          <div className="fixed inset-x-0 top-15 z-[-2] h-full bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
            <div className=""></div>
          </div>
        )}
      </div>
    );
};

export default Modal;
