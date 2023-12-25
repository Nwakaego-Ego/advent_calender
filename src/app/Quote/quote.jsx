// // import axios from "axios";
// // import { useState } from "react";

// // const useQuote = () => {
// //   const [quote, setQuote] = useState(null);
// //   const [error, setError] = useState(null);

// //   const fetchQuote = async () => {
// //     try {
// //       const response = await axios.get("https://api.quotable.io/random");
// //       setQuote(response?.data);
// //       console.log(response.data);
// //     } catch (error) {
// //       setError("Error fetching quote");
// //     }
// //   };
// //   return { quote, fetchQuote };
// // };

// // export default useQuote;

// import axios from "axios";
// import { useState } from "react";

// export const useQuote = () => {
//   const [quote, setQuote] = useState(null);
//   const [error, setError] = useState(null);

//   const fetchQuote = async () => {
//     try {
//       const response = await axios.get("https://api.quotable.io/random");
//       setQuote(response?.data);
//       console.log(response.data);
//     } catch (error) {
//       setError("Error fetching quote");
//     }
//   };

//   return { quote, fetchQuote };
// };

// export const Quote = () => {
//   // Your Quote component logic here
//   return <div>Quote Component</div>;
// };

import axios from "axios";
import { useState } from "react";

export const useQuote = () => {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random");
      setQuote(response?.data);
      console.log(response.data);
    } catch (error) {
      setError("Error fetching quote");
    }
  };

  return { quote, fetchQuote };
};

export const Quote = () => {
  // Your Quote component logic here
  return <div>Quote Component</div>;
};
