"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Fact from "../Fact/fact";
import { dataSet } from "../data";
import ReactModal from "../Modal/modal";

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // const openModal = (index) => {
  //   setSelectedData(dataSet[index]);
  //   setSelectedIndex(index);
  //   setModalIsOpen(true);
  //   console.log(selectedData);
  // };

  const openModal = (id) => {
    const foundData = dataSet.find((item) => item.id === id);
    setSelectedData(foundData);
    setModalIsOpen(true);
    console.log(selectedData);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    console.log(selectedData);
  }, [selectedData]);

  console.log(dataSet);

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
        <Fact
          openModal={openModal}
          dataSet={dataSet}
          selectedIndex={selectedIndex}
        />
        <ReactModal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          dataSet={dataSet}
          selectedData={selectedData}
        />
      </div>
    </div>
  );
};

export default Dashboard;
