"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Fact from "../Fact/fact";
import { dataSet } from "../data";
import ReactModal from "../Modal/modal";
import useFetchData from "../hooks/useFetchData";

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const { data, fetchData } = useFetchData("https://api.quotable.io/random");
  console.log(data);

  const openModal = (id) => {
    const foundData = dataSet.find((item) => item.id === id);
    setSelectedData(foundData);
    setModalIsOpen(true);
    // console.log(selectedData);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    // console.log(selectedData);
  }, [selectedData]);

  // console.log(dataSet);

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
          fetchData={fetchData}
        />
        <ReactModal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          dataSet={dataSet}
          selectedData={selectedData}
          quote={data?.content}
        />
      </div>
    </div>
  );
};

export default Dashboard;
