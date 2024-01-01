"use client";
import React from "react";
import useFetchData from "../hooks/useFetchData";

export default function page() {
  const { error, loading, data } = useFetchData();
  console.log({ error, data, loading });

  return <div>page</div>;
}
