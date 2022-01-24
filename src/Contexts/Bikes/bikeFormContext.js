import React, { createContext, useContext, useEffect, useState } from "react";
import { useAsyncFn } from "react-use";
import { useBikes } from "../bikesContext";

const BikeFormContext = createContext({});

const BikeFormProvider = (props) => {
  const { postBike } = useBikes();
  const [radios, setRadios] = useState({
    gender: false,
    storage: false,
    adultchild: false,
  });
  const [display, setDisplay] = useState({
    brand: false,
    received: false,
    size: false,
    storage: false,
    status: false,
  });
  const [search, setSearch] = useState({
    brand: "",
    received: "",
    size: "",
    storage: "",
    status: "",
  });
  const handleRadio = (event) => {
    setRadios({
      ...radios,
      [event.target.name]: event.target.value,
    });
  };
  const handleOptionSelect = (selection, name) => {
    setSearch({
      ...search,
      [name]: selection,
    });
    setDisplay({
      ...display,
      [name]: false,
    });
  };
  const onInputType = (event) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    });
  };

  const toggleDisplay = (name) => {
    if (name === "brand") {
      setDisplay({
        brand: true,
        received: false,
        size: false,
        storage: false,
        status: false,
      });
    }
    if (name === "received") {
      setDisplay({
        brand: false,
        received: true,
        size: false,
        storage: false,
        status: false,
      });
    }
    if (name === "size") {
      setDisplay({
        brand: false,
        received: false,
        size: true,
        storage: false,
        status: false,
      });
    }
    if (name === "storage") {
      setDisplay({
        brand: false,
        received: false,
        size: false,
        storage: true,
        status: false,
      });
    }
    if (name === "status") {
      setDisplay({
        brand: false,
        received: false,
        size: false,
        storage: false,
        status: true,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);

    let formSubmit = {};
    for (let key of fd.keys()) {
      formSubmit[key] = fd.get(key);
    }

    postBike(formSubmit);
  };

  const bikeFormContextValue = {
    handleRadio,
    handleOptionSelect,
    setSearch,
    search,
    toggleDisplay,
    onInputType,
    display,
    handleSubmit,
  };

  return <BikeFormContext.Provider value={bikeFormContextValue} {...props} />;
};

const useBikeForm = () => useContext(BikeFormContext);

export { BikeFormProvider, useBikeForm };
