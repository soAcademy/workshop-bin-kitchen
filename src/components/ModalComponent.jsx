import React from "react";

const Modal = (props) => {
    return (
      <div className="shadow-md w-full z-[50] fixed top-0 left-0">
        {props.showBackDrop && (
          <div className="fixed inset-x-0 top-15  h-full bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
            <div className=""></div>
          </div>
        )}
      </div>
    );
};

export default Modal;
