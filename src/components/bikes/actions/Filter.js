import React, { useEffect, useState } from "react";
import { useBikes } from "../../../state/bikesContext";
import BikeCard from "../BikeCard";
import fd from "../../form/data/formData";
import { MyCheckbox, MySearchable } from "../../form/formInputs";
import { Form, Formik } from "formik";
import Circles from "react-loading-icons/dist/components/circles";
import Edit from "./Edit";
import Delete from "./Delete";
import { useLayout } from "../../../state/layoutContext";
import { Button } from "@mui/material";

const Filter = () => {
  const [stateParams, setStateParams] = useState();
  const { searchByParamsResults, searchByParams } = useBikes();
  const {
    isDeleteModalOpen,
    isEditModalOpen,
    deleteAttempt,
    toggleShowChoices,
    showChoices,
  } = useLayout();

  useEffect(() => {
    if (stateParams === undefined) return;
    if (!isEditModalOpen) {
      searchByParams(stateParams);
    }
    if (!isDeleteModalOpen) {
      searchByParams(stateParams);
    }
  }, [isDeleteModalOpen, isEditModalOpen, deleteAttempt]);

  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          console.log(values);
          let params = {};
          for (let key in values) {
            if (key === "serial" || key === "wobc_id") {
              params[key] = values[key].toUpperCase();
            } else if (key === "brand") {
              params[key] = values[key];
            } else {
              params[key] = values[key][0];
            }
          }
          setStateParams(params);
          searchByParams(params);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="grid grid-cols-2 gap-4 mb-4 items-center">
            {fd.options.map((option) => {
              return option.choices && option.name != "brand" ? (
                <MyCheckbox
                  key={option.name}
                  name={option.name}
                  showChoices={showChoices}
                  toggleShowChoices={toggleShowChoices}
                  children={option.choices}
                />
              ) : // THIS IS HERE BECAUSE OF THE SERIAL AND WOBC. EVENTUALLY MAKE A FILTER DATA OBJECT AND LOOP THROUGH THAT INSTEAD
              option.name === "brand" ? (
                <MySearchable
                  key={option.name}
                  name={option.name}
                  children={option.choices}
                  setFieldValue={setFieldValue}
                />
              ) : null;
            })}
            <div className="flex mt-1">
              <Button variant="contained" fullWidth type="submit">
                Submit
              </Button>
              <Button variant="contained" fullWidth type="submit">
                Clear Params
              </Button>
            </div>
          </Form>
        )}
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
