"use client";
import React, { useState } from "react";
import Image from "next/image";
import Fact from "../Fact/fact";
import { dataSet } from "../data";
import ReactModal from "../Modal/modal";

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const picked = (index) => {
    setSelectedData(index);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className=" ml-20 ">
      <div className="flex flex-row  ">
        <Image
          src="/xmas.png"
          alt="santa"
          width={270}
          height={150}
          layout="fit"
          objectFit="cover"
          className="hidden md:block"
        />
        <Fact openModal={openModal} dataSet={dataSet} />
        <ReactModal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          dataSet={dataSet}
          // selected={(index) => selected(index)}
          picked={selectedData}
        />
      </div>
    </div>
  );
};

export default Dashboard;
