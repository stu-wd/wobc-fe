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
import { initialFilterValues } from "../../form/data/formData";

const Filter = () => {
  const [stateParams, setStateParams] = useState();
  const { searchByParamsResults, searchByParams, formOptionsRefreshed } =
    useBikes();
  const { isDeleteModalOpen, isEditModalOpen, deleteAttempt } = useLayout();

  const updatedOptions = formOptionsRefreshed.value;

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
        initialValues={initialFilterValues}
        onSubmit={(values, actions) => {
          searchByParams(values);
        }}
      >
        {({ values, setFieldValue, resetForm, handleReset }) => (
          <Form className="grid grid-cols-2 gap-4 mb-4 items-center">
            {fd.options.map((option) => {
              return (
                option.type != "text" && (
                  <MySearchable
                    key={option.name}
                    name={option.name}
                    children={
                      option.choices
                        ? option.choices
                        : updatedOptions[option.name]
                    }
                    setFieldValue={setFieldValue}
                    size={"small"}
                    multiple={true}
                    filterSelectedOptions={true}
                  />
                )
              );
            })}
            <div className="flex mt-1">
              <Button variant="contained" fullWidth type="submit">
                Submit
              </Button>
              {/* <Button
                variant="contained"
                fullWidth
                // type="reset"
                onClick={handleReset}
                // onClick={() => resetForm(initialFilterValues)}
              >
                Clear Params
              </Button> */}
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

// return option.choices && option.name != "brand" ? (
//   <>
//     <MyCheckbox
//       key={option.name}
//       name={option.name}
//       showChoices={showChoices}
//       toggleShowChoices={toggleShowChoices}
//       children={option.choices}
//     />
//   </>
// ) : option.name === "brand" ? (
//   <>
//     <MySearchable
//       key={option.name}
//       name={option.name}
//       children={option.choices}
//       setFieldValue={setFieldValue}
//     />
//   </>
// ) : !option.choices &&
//   option.name != "brand" &&
//   option.type != "text" ? (
//   <>
//     <MyCheckbox
//       key={option.name}
//       name={option.name}
//       showChoices={showChoices}
//       toggleShowChoices={toggleShowChoices}
//       children={updatedOptions[option.name]}
//     />
//   </>
// ) : null;
