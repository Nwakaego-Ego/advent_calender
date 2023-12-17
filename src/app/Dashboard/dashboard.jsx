import React from "react";
import Image from "next/image";
import Fact from "../Fact/fact";

const Dashboard = () => {
  return (
    <div className=" ml-20 ">
      <div className="flex flex-row">
        <Image
          src="/xmas.png"
          alt="santa"
          width={270}
          height={150}
          layout="fit"
          objectFit="cover"
        />
        <Fact />
      </div>
    </div>
  );
};

export default Dashboard;
