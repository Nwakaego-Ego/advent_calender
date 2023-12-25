// "use client";
// import React, { createContext, useContext, useEffect } from "react";
// import useQuote from "./Quote/quote";
// import Dashboard from "./Dashboard/dashboard";
// import Data from "./data";

// export const QuoteContext = createContext();

// export default function Home() {
//   const { quote, fetchQuote } = useQuote();

//   useEffect(() => {
//     fetchQuote();
//   }, [fetchQuote]);

//   return (
//     <main className="">
//       <QuoteContext.Provider value={quote}>
//         <Data />
//       </QuoteContext.Provider>
//       <Dashboard />
//     </main>
//   );
// }
"use client";
import React, { createContext, useContext, useEffect } from "react";
import { useQuote, Quote } from "./Quote/quote";
import Dashboard from "./Dashboard/dashboard";
import Data from "./data";

export const QuoteContext = createContext();

export default function Home() {
  const { quote, fetchQuote } = useQuote();

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <main className="">
      <QuoteContext.Provider value={quote}>
        <Data />
      </QuoteContext.Provider>
      <Dashboard />
    </main>
  );
}
