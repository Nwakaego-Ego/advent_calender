// import React from "react";
// import Modal from "react-modal";
// import { dataSet } from "../data";

// const ReactModal = ({ closeModal, modalIsOpen, dataSet, selected }) => {
//   const customStyles = {
//     content: {
//       top: "50%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
//       width: "500px",
//       height: "300px",
//     },
//   };

//   return (
//     <div>
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         style={customStyles}
//       >
//         {selected !== null && dataSet[selected] && (
//           <div key={selected}>
//             {dataSet[selected].image && (
//               <img src={dataSet[selected].image} alt="santa" />
//             )}
//             {dataSet[selected].quote && <p>{dataSet[selected].quote}</p>}
//             {dataSet[selected].trivia && <p>{dataSet[selected].trivia}</p>}
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default ReactModal;

import React, { useEffect } from "react";
import Modal from "react-modal";
import { dataSet } from "../data";

const ReactModal = ({ closeModal, modalIsOpen, dataSet, picked }) => {
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

  useEffect(() => {
    // Call the picked function when the modal opens
    if (modalIsOpen) {
      picked(null); // Set to null initially or pass an initial index if needed
    }
  }, [modalIsOpen, picked]);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {picked !== null && dataSet[picked] && (
          <div key={picked}>
            {dataSet[picked].image && (
              <img src={dataSet[picked].image} alt="santa" />
            )}
            {dataSet[picked].quote && <p>{dataSet[picked].quote}</p>}
            {dataSet[picked].trivia && <p>{dataSet[picked].trivia}</p>}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ReactModal;
