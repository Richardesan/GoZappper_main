import React from "react";
import CustomButton from "./customButton";
import CustomButton2 from "./customButton2";

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: boolean;
  isCancel?: boolean;
  name: string;
  description?: string;
  handleModal: any,
  buttonText: string,
  descriptionSlim?: boolean

  renderButtons?: () => JSX.Element;  // Allow custom button rendering
  children?: React.ReactNode;  // For rendering custom content inside the modal
}

const Modal: React.FC<ModalProps> = ({
  setOpenModal,
  openModal,
  isCancel = true,  // Default to true if not provided
  name,
  description,
handleModal,
buttonText,
descriptionSlim,
  renderButtons,
  children,
}) => {
  const handleClose = () => {
    setOpenModal(false);
  };

  //Modal Style
  const modalStyle = {
    modal: `fixed bg-black top-0 left-0 w-full h-screen flex justify-center items-center text-darkText transition-opacity duration-200`,
    modalLogic: openModal
      ? "bg-opacity-50 opacity-100"
      : "bg-opacity-0 opacity-0 pointer-events-none",
    container: `bg-white transform transition-transform duration-200 ease-in-out w-5/12 pt-8 pb-14 px-10 rounded-xl shadow-lg relative`,
    containerLogic: openModal ? "scale-100 opacity-100" : "scale-90 opacity-0",
  };

  //Destructuring Modal Style
  const { modal, modalLogic, container, containerLogic } = modalStyle;

  return (
    <div className={`${modal} ${modalLogic}`}>
      <div className={`${container} ${containerLogic}`}>
        <img
          src="/X.svg"
          className="absolute right-6 top-4 cursor-pointer"
          onClick={handleClose}
        />
        <h1 className="text-xl font-bold">{name}</h1>
        <p className={`pr-4 py-4 ${descriptionSlim ? "text-sm": "text-base"}`}>{description}</p>

        {/* Custom Content Passed as Children */}
        {children}

        {/* Render buttons if passed, otherwise use default logic */}
        <div className="flex gap-4 items-center mt-10">
          {renderButtons ? (
            renderButtons()
          ) : (
            <>
              {isCancel && (
                <div onClick={handleClose} className="w-full">
                  <CustomButton2 buttonText="Cancel" />
                </div>
              )}
              <CustomButton
                buttonText={buttonText}
                handleLogic={handleModal}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
