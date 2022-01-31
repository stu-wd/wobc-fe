import React from "react";
import { Box } from "@mui/material";
import { useBikeForm } from "../../state/Bikes/bikeFormContext";
import fd from "../form/data/formData";
import { MyRadio, MySelect, MyTextField } from "../form/formInputs";
import { Formik, Form } from "formik";

export const DropdownResults = ({
  choices,
  search,
  name,
  handleOptionSelect,
}) => {
  return (
    <Box>
      {choices
        .filter((value) => {
          if (search[name] == "" || search[name] == undefined) {
            return;
          } else if (value.toLowerCase().includes(search[name].toLowerCase())) {
            return value;
          }
        })
        .map((choice, i) => {
          return (
            <div
              onClick={() => handleOptionSelect(choice, name)}
              key={i}
              className="cursor-pointer border-[1px] border-neutral-800 p-1"
            >
              <span
                onClick={() => handleOptionSelect(choice, name)}
                className="cursor-pointer"
                value={choice}
              >
                {choice}
              </span>
            </div>
          );
        })}
    </Box>
  );
};

const MyBikeForm = ({ buttonText, startingValues, validate, onSubmit }) => {
  const {
    handleRadio,
    handleOptionSelect,
    search,
    toggleDisplay,
    onInputType,
    display,
  } = useBikeForm();

  return (
    <>
      <Formik
        initialValues={startingValues}
        // validationSchema={validate}
        onSubmit={onSubmit}
      >
        <Form>
          {fd.options.map((o, i) => {
            if (o.type === "text") {
              return <MyTextField name={o.name} key={i} />;
            }

            if (o.type === "select") {
              return <MySelect name={o.name} key={i} children={o.choices} />;
            }

            if (o.type === "radio") {
              return (
                <MyRadio
                  name={o.name}
                  key={i}
                  children={o.choices}
                  handleRadio={handleRadio}
                />
              );
            }

            if (o.type === "search") {
              return (
                <>
                  <MyTextField
                    name={o.name}
                    key={i}
                    onClick={() => toggleDisplay(o.name)}
                    onChange={onInputType}
                    value={search[o.name]}
                  />
                  {display[o.name] && (
                    <DropdownResults
                      choices={o.choices}
                      name={o.name}
                      search={search}
                      handleOptionSelect={handleOptionSelect}
                    />
                  )}
                </>
              );
            }
          })}
          <button className="button mt-2" type="submit">
            {buttonText}
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default MyBikeForm;
