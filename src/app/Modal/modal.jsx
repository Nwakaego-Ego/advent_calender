import React from "react";
import Modal from "react-modal";
import Spinner from "../loading/page";

const ReactModal = ({
  closeModal,
  modalIsOpen,
  dataSet,
  selectedData,
  quote = "",
  // joke = [],
  trivial,
  question = [],
  loading,
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
          {loading ? (
            <Spinner />
          ) : (
            <>
              {selectedData && <img src={selectedData.image} />}
              {(selectedData?.id === 2 ||
                selectedData?.id === 8 ||
                selectedData?.id === 11 ||
                selectedData?.id === 14 ||
                selectedData?.id === 17 ||
                selectedData?.id === 20) && <p>{quote}</p>}
              {/* {selectedData?.id === 3 && <p>{joke[0]?.title}</p>} */}
              {selectedData?.id === 3 && <p>{trivial}</p>}
              {selectedData?.id === 4 && <p>{question}</p>}
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ReactModal;
