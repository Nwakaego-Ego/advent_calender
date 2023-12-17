import React from "react";
import Image from "next/image";
import "./fact.css";

const Fact = () => {
  const dataSet = [
    {
      image: "./santa.png",
    },
    {
      quote:
        "“And so I'm offering this simple phrase to kids from one to 92. Although it's been said many times, many ways, merry Christmas to you.” — Robert Wells, “The Christmas Song”",
    },
    {
      trivia: "“What do Swedish children leave for Santa Claus Coffee.”",
    },
    {
      image: "./santa.png",
    },
    {
      quote:
        "“And so I'm offering this simple phrase to kids from one to 92. Although it's been said many times, many ways, merry Christmas to you.” — Robert Wells, “The Christmas Song”",
    },
    {
      trivia: "“What do Swedish children leave for Santa Claus Coffee.”",
    },
    {
      image: "./santa.png",
    },
    {
      quote:
        "“And so I'm offering this simple phrase to kids from one to 92. Although it's been said many times, many ways, merry Christmas to you.” — Robert Wells, “The Christmas Song”",
    },
    {
      trivia: "“What do Swedish children leave for Santa Claus Coffee.”",
    },
    {
      image: "./santa.png",
    },
    {
      quote:
        "“And so I'm offering this simple phrase to kids from one to 92. Although it's been said many times, many ways, merry Christmas to you.” — Robert Wells, “The Christmas Song”",
    },
    {
      trivia: "“What do Swedish children leave for Santa Claus Coffee.”",
    },
    {
      image: "./santa.png",
    },
    {
      quote:
        "“And so I'm offering this simple phrase to kids from one to 92. Although it's been said many times, many ways, merry Christmas to you.” — Robert Wells, “The Christmas Song”",
    },
    {
      trivia: "“What do Swedish children leave for Santa Claus Coffee.”",
    },
    {
      image: "./santa.png",
    },
    {
      quote:
        "“And so I'm offering this simple phrase to kids from one to 92. Although it's been said many times, many ways, merry Christmas to you.” — Robert Wells, “The Christmas Song”",
    },
    {
      trivia: "“What do Swedish children leave for Santa Claus Coffee.”",
    },
    {
      image: "./santa.png",
    },
    {
      quote:
        "“And so I'm offering this simple phrase to kids from one to 92. Although it's been said many times, many ways, merry Christmas to you.” — Robert Wells, “The Christmas Song”",
    },
    {
      trivia: "“What do Swedish children leave for Santa Claus Coffee.”",
    },
    {
      image: "./santa.png",
    },
    {
      quote:
        "“And so I'm offering this simple phrase to kids from one to 92. Although it's been said many times, many ways, merry Christmas to you.” — Robert Wells, “The Christmas Song”",
    },
    {
      trivia: "“What do Swedish children leave for Santa Claus Coffee.”",
    },
    {
      trivia: "“What do Swedish children leave for Santa Claus Coffee.”",
    },
  ];

  return (
    <div className="container mt-20 lg:mt-[80px]">
      {dataSet.map((data, index) => {
        return (
          <div key={data.id} className="item ">
            <div className="">
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
          </div>
        );
      })}
    </div>
  );
};

export default Fact;
