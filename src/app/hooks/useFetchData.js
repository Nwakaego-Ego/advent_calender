"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response?.data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchData };
};

export default useFetchData;
