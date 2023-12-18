"use client";
import React, { useState } from "react";
import Image from "next/image";
import Fact from "../Fact/fact";

const Dashboard = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
        <Fact
          openModal={openModal}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      </div>
    </div>
  );
};

export default Dashboard;
