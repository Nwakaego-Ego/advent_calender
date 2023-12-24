import React, { createContext, useContext, useEffect } from "react";
import Quote from "./Quote/quote";
import Dashboard from "./Dashboard/dashboard";

export const QuoteContext = createContext();

export default function Home() {
  const { quote, fetchQuote } = useQuote();

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <main className="">
      <QuoteContext.Provider value={quote}>{Quote}</QuoteContext.Provider>
      <Dashboard />
    </main>
  );
}
