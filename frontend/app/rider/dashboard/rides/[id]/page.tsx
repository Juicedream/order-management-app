"use client";
import { useParams } from "next/navigation";
import React from "react";

const RideIdPage = () => {
  const { id } = useParams();
  return <div>Rider {id}</div>;
};

export default RideIdPage;
