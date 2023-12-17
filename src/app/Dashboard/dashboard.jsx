import React from "react";
import Image from "next/image";
import Fact from "../Fact/fact";

const Dashboard = () => {
  return (
    <>
      <h1>Advent Calender</h1>
      <div>
        <Image
          src="/xmas.png"
          alt="santa"
          width={200}
          height={100}
          layout="fit"
          objectFit="cover"
        />
        <Fact />
      </div>
    </>
  );
};

export default Dashboard;
