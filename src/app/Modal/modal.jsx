import React, { useState } from "react";
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
  Imgs,
}) => {
  const [selectImage, setSelectImage] = useState();

  // const selectedImg = () => {
  //   const matchingImage = Imgs.find((img) => img.id === selectedData.id);
  //   const selectedImage = matchingImage?.image;
  //   const randomImage = Math.random(selectImage)

  //   setSelectImage(randomImage);
  // };

  const selectedImg = () => {
    const matchingImages = Imgs.filter((img) => img.id === selectedData.id);

    if (matchingImages.length > 0) {
      const randomIndex = Math.floor(Math.random() * matchingImages.length);

      const randomImage = matchingImages[randomIndex];

      const selectedImage = randomImage?.image || "default_image_url";

      setSelectImage(selectedImage);
    } else {
      setSelectImage("default_image_url");
    }
  };

  console.log(selectImage);

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

  // const santa = Imgs.find((img) => img.id === selectedData.id)?.image;

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

              {selectedData && (
                <img
                  // src={Imgs.find((img) => img.id === selectedData.id)?.image}
                  src={selectedData?.selectImage}
                  alt="Selected Image"
                  className="w-[300px] h-[250px] modal-Img"
                />
              )}
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
