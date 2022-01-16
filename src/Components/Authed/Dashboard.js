import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBikes } from "../../Contexts/bikes.context";
import { useAuth } from "../../Contexts/auth.context";
import Stats from "../Bikes/Stats";
import SearchBike from "../Bikes/Actions/SearchBike";
import BikeCard from "../Bikes/BikeCard";
import Sidebar from "./Sidebar";
import BikeForm from "../Bikes/BikeForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const { getBikes, bikes } = useBikes();

  useEffect(() => {
    getBikes();
  }, []);

  return <div>{bikes.value && <Stats bikes={bikes.value} />}</div>;
};

export default Dashboard;
