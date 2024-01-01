"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://api.quotable.io/random");
        setData(response?.data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { quote, error, loading };
};

export default useFetchData;
