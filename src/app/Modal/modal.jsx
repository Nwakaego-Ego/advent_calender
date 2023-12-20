// import React from "react";
// import Modal from "react-modal";

// const ReactModal = ({ closeModal, modalIsOpen, dataSet, selectedData }) => {
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
//         {dataSet.map((data, id) => {
//           return (
//             <div key={id}>
//               {data.image && <img src={data.image} alt="santa" />}

//             </div>
//           );
//         })}
//       </Modal>
//     </div>
//   );
// };

// export default ReactModal;

import { dataSet } from "../data";
import React from "react";
import Modal from "react-modal";

const ReactModal = ({ closeModal, modalIsOpen, dataSet, selectedData }) => {
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
        {selectedData !== null && dataSet[selectedData] && (
          <div key={selectedData}>
            {dataSet[selectedData].image && (
              <img src={dataSet[selectedData].image} alt="santa" />
            )}
            {dataSet[selectedData].quote && (
              <p>{dataSet[selectedData].quote}</p>
            )}
            {dataSet[selectedData].trivia && (
              <p>{dataSet[selectedData].trivia}</p>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ReactModal;
