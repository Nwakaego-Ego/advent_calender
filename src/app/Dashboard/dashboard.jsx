"use client";
import React, { useState } from "react";
import Image from "next/image";
import Fact from "../Fact/fact";
import { dataset } from "../data";
import ReactModal from "../Modal/modal";

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
        <Fact openModal={openModal} dataset={dataset} />
        <ReactModal closeModal={closeModal} modalIsOpen={modalIsOpen} />
      </div>
    </div>
  );
};

export default Dashboard;
