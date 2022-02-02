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
import { DropdownResults } from "../MyBikeForm";
import Edit from "./Edit";
import Delete from "./Delete";

const Filter = () => {
  const { searchByParamsResults, searchByParams } = useBikes();

  const [showChoices, setShowChoices] = useState({
    status: false,
    style: false,
    gender: false,
    adultchild: false,
    size: false,
    storage: false,
    received: false,
  });

  // const [clickedItems, setClickedItems] = useState({
  //   status: "",
  //   style: "",
  //   gender: "",
  //   adultchild: "",
  //   size: "",
  //   storage: "",
  //   received: "",
  // });

  const toggleShowChoices = (category) => {
    setShowChoices({
      ...showChoices,
      [category]: !showChoices[category],
    });
  };

  // const handleClickItem = (e) => {
  //   console.log(e.target);
  //   console.log(e.target.name);
  //   console.log(e.target.value);
  //   setClickedItems({
  //     ...clickedItems,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // console.log(clickedItems);

  return (
    <>
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
                            // onClick={handleClickItem}
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
      <div className="">
        {searchByParamsResults.loading === true && <Circles />}
        {searchByParamsResults.value &&
          searchByParamsResults.value.length === 0 && <div>Nothin' for ya</div>}

        {searchByParamsResults.value &&
          searchByParamsResults.value.map((match, i) => {
            return <BikeCard match={match} key={i} />;
          })}
      </div>

      <Edit />
      <Delete />
    </>
  );
};

export default Filter;
