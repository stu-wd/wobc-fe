import React from "react";
import { useBikes } from "../../state/bikesContext";

const Stats = () => {
  const { bikes } = useBikes();

  const donated = bikes.value.filter((bike) => {
    return bike.status === "Donated";
  });

  const ready = bikes.value.filter((bike) => {
    return bike.status === "Ready";
  });

  const inspection = bikes.value.filter((bike) => {
    return bike.status === "Inspection";
  });

  const repair = bikes.value.filter((bike) => {
    return bike.status === "Repair";
  });

  const scrap = bikes.value.filter((bike) => {
    return bike.status === "Scrap";
  });

  const scrapped = bikes.value.filter((bike) => {
    return bike.status === "Scrapped";
  });

  return (
    <div>
      {bikes.value && (
        <>
          <h3>There are {bikes.value.length} bikes in db</h3>
          <h3>Donated: {donated.length}</h3>
          <h3>Ready: {ready.length}</h3>
          <h3>Inspection: {inspection.length}</h3>
          <h3>repair: {repair.length}</h3>
          <h3>scrap: {scrap.length}</h3>
          <h3>scrapped: {scrapped.length}</h3>
        </>
      )}
    </div>
  );
};

export default Stats;
