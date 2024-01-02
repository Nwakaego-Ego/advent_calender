import React from "react";
import Modal from "react-modal";

const ReactModal = ({
  closeModal,
  modalIsOpen,
  dataSet,
  selectedData,
  quote = "",
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
      height: "300px",
    },
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div>
          {selectedData && <img src={selectedData.image} />}
          {selectedData && <p>{quote}</p>}
          {selectedData && <p>{selectedData.trivia}</p>}
        </div>
      </Modal>
    </div>
  );
};

export default ReactModal;
