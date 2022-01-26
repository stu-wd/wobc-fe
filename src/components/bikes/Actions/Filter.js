import React, { useEffect, useState } from "react";
import { useBikes } from "../../../state/bikesContext";
import {
  BiSearchAlt,
  BiChevronDown as ArrowDown,
  BiChevronUp as ArrowUp,
} from "react-icons/bi";
import BikeCard from "../BikeCard";
import fd from "../../form/data/formData";
import { MyRadio, MyTextField } from "../../form/formInputs";
import { Form, Formik, Field } from "formik";
import Circles from "react-loading-icons/dist/components/circles";
import { useBikeForm } from "../../../state/Bikes/bikeFormContext";
import { DropdownResults } from "../MyBikeForm";

const Filter = () => {
  const {
    getBikes,
    searchSerial,
    searchResults,
    searchByParamsResults,
    searchByParams,
  } = useBikes();

  const { display, toggleDisplay, search, handleOptionSelect, onInputType } =
    useBikeForm();

  // useEffect(() => {
  //   searchResults.value = undefined;
  //   getBikes();
  // }, []);

  // const [search, setSearch] = useState("");

  // const handleSearch = () => {
  //   if (search === "" || undefined) return;
  //   searchSerial(search.toUpperCase());
  // };

  const [showChoices, setShowChoices] = useState({
    status: false,
    style: false,
    gender: false,
    adultchild: false,
    size: false,
    storage: false,
    received: false,
  });

  const toggleShowChoices = (category) => {
    setShowChoices({
      ...showChoices,
      [category]: !showChoices[category],
    });
  };

  return (
    <>
      {/* <input type="text" onChange={(e) => setSearch(e.target.value)} /> */}
      {/* <div
          onClick={handleSearch}
          className="absolute right-1 top-2 cursor-pointer"
        >
          <BiSearchAlt size={28} />
        </div> */}
      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          console.log("values: !! == ", values);
          let params = {};
          for (let key in values) {
            if (key === "serial" || key === "wobc_id" || key === "brand") {
              params[key] = values[key].toUpperCase();
            } else {
              params[key] = values[key][0];
            }
          }
          searchByParams(params);
        }}
      >
        <Form className="flex flex-col">
          <div className="grid grid-cols-2 gap-4 mb-4">
            {fd.options.map((option) => {
              return option.choices && option.name != "brand" ? (
                <div className="flex flex-col">
                  <div
                    className="flex flex-row items-center cursor-pointer border-2 border-grey p-2"
                    onClick={() => toggleShowChoices(option.name)}
                  >
                    <span>{option.name}</span>
                    <span>
                      {showChoices[option.name] ? <ArrowUp /> : <ArrowDown />}
                    </span>
                  </div>
                  <div
                    className={`${showChoices[option.name] ? "" : "hidden"}`}
                  >
                    {option.choices.map((choice) => {
                      return (
                        <label className="m-1 flex flex-row">
                          <Field
                            type="checkbox"
                            name={option.name}
                            value={choice}
                            className="m-1 border-2 border-orange-500"
                          />
                          {choice}
                        </label>
                      );
                    })}{" "}
                  </div>
                </div>
              ) : // :
              // option.name === "brand" ? (
              // <div>
              //   <MyTextField
              //     name={option.name}
              //     onClick={() => toggleDisplay(option.name)}
              //     onChange={onInputType}
              //     value={search[option.name]}
              //   />
              //   {display[option.name] && (
              //     <DropdownResults
              //       choices={option.choices}
              //       name={option.name}
              //       search={search}
              //       handleOptionSelect={handleOptionSelect}
              //     />
              //   )}
              // </div>
              // )
              null;
            })}
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
      {/* {searchResults.value && searchResults.value.length === 0 && (
        <>No results</>
      )} */}
      {/* {searchResults.value &&
        searchResults.value.map((match) => {
          return (
            <>
              <BikeCard match={match} />
            </>
          );
        })} */}
      <div className="mt-4">
        {searchByParamsResults.loading === true && <Circles />}
        {searchByParamsResults.value &&
          searchByParamsResults.value.length === 0 && <div>Nothin' for ya</div>}

        {searchByParamsResults.value &&
          searchByParamsResults.value.map((match, i) => {
            return <BikeCard match={match} key={i} />;
          })}
      </div>
    </>
  );
};

export default Filter;
