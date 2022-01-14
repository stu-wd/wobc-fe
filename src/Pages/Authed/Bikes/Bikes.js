import React, { useEffect } from "react";
import { useBikes } from "./../../../Contexts/bikes.context";
import BikeCard from "./BikeCard";

const Bikes = () => {
  const { bikes, isLoading, getBikes } = useBikes();

  console.log(bikes, getBikes);

  useEffect(() => {
    getBikes();
  }, []);

  if (isLoading) {
    setTimeout(() => {
      return <h5>Fetchin' bikes...</h5>;
    }, 1000);
  }

  return (
    <div>
      {bikes ? (
        bikes.map((bike, index) => {
          return <BikeCard key={index} bike={bike} />;
        })
      ) : (
        <h1>No bikes to show</h1>
      )}
    </div>
  );
};

export default Bikes;
