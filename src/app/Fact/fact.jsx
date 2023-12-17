import React from "react";
import Image from "next/image";

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
    <div>
      {dataSet.map((data) => {
        return (
          <div key={data.id} className="container">
            <Image
              src="/wrap.png"
              width={150}
              height={50}
              alt="wrap"
              layout="fit"
              objectFit="cover"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Fact;
