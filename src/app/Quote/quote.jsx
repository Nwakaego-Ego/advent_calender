import axios from "axios";
import { useState } from "react";

const useQuote = () => {
  const [quote, setQuote] = useState(null);

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

export default useQuote;
