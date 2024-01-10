import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Spinner from "../../component/loading/loading";

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
  Imgs,
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

  const randomIndex = Math.floor(Math.random() * Imgs.length);
  let randomImage = Imgs[randomIndex].image;

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
              {/* {selectedData && <img src={selectedData.image} />} */}
              {/* {selectedData && <img src={Imgs} alt="Selected Image" />} */}
              {[1, 5, 9, 13, 17, 21, 25].includes(selectedData?.id) && (
                <img
                  // src={Imgs.find((img) => img.id === selectedData.id)?.image}
                  src={randomImage}
                  alt="Selected Image"
                  className="w-[300px] h-[250px] modal-Img"
                />
              )}

              {[3, 7, 11, 15, 19, 23].includes(selectedData?.id) && (
                <p>{quote}</p>
              )}
              {/* {selectedData?.id === 3 && <p>{joke[0]?.title}</p>} */}
              {[2, 6, 10, 14, 18, 22].includes(selectedData?.id) && (
                <p>{trivial}</p>
              )}
              {[4, 8, 12, 16, 20, 24].includes(selectedData?.id) && (
                <p>{question}</p>
              )}
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ReactModal;
