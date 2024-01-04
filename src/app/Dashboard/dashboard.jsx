"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Fact from "../Fact/fact";
import { dataSet } from "../data";
import ReactModal from "../Modal/modal";
import useFetchData from "../hooks/useFetchData";
// import Imgs from "../imgs";

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const { data, fetchData, loading } = useFetchData(
    "https://api.quotable.io/random"
  );
  const { data: trivial, fetchData: fetchTrivial } = useFetchData(
    "https://v2.jokeapi.dev/joke/Christmas"
  );
  const { data: question, fetchData: fetchQuestion } = useFetchData(
    " https://opentdb.com/api.php?amount=10&category=11&type=multiple"
  );
  console.log(trivial ? trivial : "the array is empty");

  // if (question && question.results && question.results.length > 0) {
  //   console.log(question.results[0].question);
  // } else {
  //   console.log("question data is not available yet.");
  // }

  const openModal = (id) => {
    const foundData = dataSet.find((item) => item.id === id);
    setSelectedData(foundData);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    // console.log(selectedData);
  }, [selectedData]);

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
          fetchTrivial={fetchTrivial}
          fetchQuestion={fetchQuestion}
        />
        <ReactModal
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
          dataSet={dataSet}
          selectedData={selectedData}
          quote={data?.content}
          trivial={trivial?.setup}
          question={question?.results ? question.results[0].question : null}
          loading={loading}
          // Imgs={Imgs}
          // Spinner={Spinner}
        />
      </div>
    </div>
  );
};

export default Dashboard;
