import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBikes } from "../../Contexts/bikes.context";
import { useAuth } from "../../Contexts/auth.context";
import Bikes from "../Bikes/Bikes";
import BikeActions from "../Bikes/Actions/BikeActions";
import SearchBike from "../Bikes/Actions/SearchBike";
import BikeCard from "../Bikes/BikeCard";
import Sidebar from "./Sidebar";
import BikeForm from "../Bikes/BikeForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    cardView,
    showBikes,
    toggleBikes,
    toggleCardView,
    searchedBikeBySerial,
  } = useBikes();

  // console.log(user)

  // useEffect(() => {
  //     { searchedBikeBySerial ? <div>{searchedBikeBySerial.serial}</div> : <>no serial</>}
  // }, [searchedBikeBySerial])

  return (
    <div>
      {/* <BikeForm /> */}
      More to come!
      {/* <h2>Dashboard</h2> */}
      {/* <SearchBike /> */}
      {/* welcome back {user.username} */}
      {/* <button onClick={toggleBikes}>{`${ showBikes ? 'Hide' : 'Show' } Bikes`}</button>

            <div style={{display: 'flex'}}>
                { 
                showBikes ?
                <Bikes />
                :
                <></>
                }

                {
                    cardView ? 
                    <BikeActions />
                    :
                    <></>
                    
                }
            </div> */}
    </div>
  );
};

export default Dashboard;
