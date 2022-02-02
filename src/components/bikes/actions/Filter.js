import React, { useEffect, useState } from "react";
import { useBikes } from "../../../state/bikesContext";
import BikeCard from "../BikeCard";
import fd from "../../form/data/formData";
import { MyCheckbox, MySearchable } from "../../form/formInputs";
import { Form, Formik, Field } from "formik";
import Circles from "react-loading-icons/dist/components/circles";
import Edit from "./Edit";
import Delete from "./Delete";
import { useLayout } from "../../../state/layoutContext";
import {
  BiChevronDown as ArrowDown,
  BiChevronUp as ArrowUp,
} from "react-icons/bi";

// const MyCheckbox = ({ children, showChoices, toggleShowChoices, ...props }) => {
//   return (
//     <div className="flex flex-col">
//       <div
//         className="flex flex-row items-center cursor-pointer border-2 border-grey p-2"
//         onClick={() => toggleShowChoices(props.name)}
//       >
//         <span>{props.name}</span>
//         <span>{showChoices[props.name] ? <ArrowUp /> : <ArrowDown />}</span>
//       </div>
//       <div className={`${showChoices[props.name] ? "" : "hidden"}`}>
//         {children.map((choice) => {
//           return (
//             <label key={choice} className="m-1 flex flex-row">
//               <Field
//                 type="checkbox"
//                 name={props.name}
//                 value={choice}
//                 className="m-1 border-2 border-orange-500"
//               />
//               {choice}
//             </label>
//           );
//         })}
//       </div>
//     </div>
//     // <FormControl component="fieldset">
//     //   <FormLabel>{props.name}</FormLabel>
//     //   <FormGroup>
//     //     <FormControlLabel
//     //       control={<Checkbox checked={}}
//     //     />
//     //   </FormGroup>
//     // </FormControl>
//   );
// };

const Filter = () => {
  const { searchByParamsResults, searchByParams } = useBikes();
  const [stateParams, setStateParams] = useState();
  const { isDeleteModalOpen, isEditModalOpen, deleteAttempt } = useLayout();

  useEffect(() => {
    if (!isEditModalOpen) {
      searchByParams(stateParams);
    }
    if (!isDeleteModalOpen) {
      searchByParams(stateParams);
    }
  }, [isDeleteModalOpen, isEditModalOpen, deleteAttempt]);

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

  const clearParams = () => {};
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
            <button className="button" type="submit">
              Submit
            </button>
            <button className="button mt-2" type="reset" onClick={clearParams}>
              Clear params
            </button>
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
