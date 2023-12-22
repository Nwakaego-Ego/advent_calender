import React from "react";
import Image from "next/image";
import DataSet from "../data";
import "./fact.css";

const Fact = ({ openModal, dataSet, selectedIndex }) => {
  //   if (!dataSet) {
  //     return <p>Loading...</p>; // or render a loading indicator
  //   }

  return (
    <div className="container mt-20 lg:mt-[80px]">
      {dataSet.map((data, index) => {
        return (
          <div
            key={data.id}
            className="item"
            onClick={() => openModal(data.id)}
          >
            <Image
              src="/wrap.png"
              width={300}
              height={200}
              alt="wrap"
              layout="fit"
              objectFit="cover"
              className="wrap-img "
            />
            <span className="index text-white"> {index + 1}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Fact;
