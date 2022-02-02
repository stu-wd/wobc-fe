import React from "react";
import {
  TextField,
  NativeSelect,
  FormControl,
  InputLabel,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { capitalize } from "../../utils/capitalize";
import { useField, Field } from "formik";
import {
  BiChevronDown as ArrowDown,
  BiChevronUp as ArrowUp,
} from "react-icons/bi";

export const MyTextField = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className={`mt-4`}>
        <TextField
          {...field}
          {...props}
          fullWidth
          label={
            props.name === "confirmPassword"
              ? capitalize("Confirm Password")
              : props.name === "wobc_id"
              ? "WOBC ID (optional)"
              : capitalize(props.name)
          }
          className={`text-sm font-medium text-gray-900 ${
            meta.error || (meta.touched && meta.error)
              ? "border-2 border-red-600"
              : ""
          }`}
          type={
            props.name === "confirmPassword" || props.name === "password"
              ? "password"
              : ""
          }
          autoComplete="off"
        />
      </div>
    </>
  );
};

export const MySelect = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl fullWidth>
      <InputLabel variant="filled" htmlFor={props.name}>
        {capitalize(props.name)}
      </InputLabel>
      <NativeSelect
        {...field}
        inputProps={{
          name: props.name,
        }}
      >
        <option value=""></option>
        {children.map((choice, i) => {
          return (
            <option value={choice} key={i}>
              {choice}
            </option>
          );
        })}
      </NativeSelect>
    </FormControl>
  );
};

export const MyRadio = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="grid grid-cols-2 justify-center justify-items-start">
      {children.map((choice, i) => {
        return (
          <div key={i} className="mt-2 flex justify-items-center items-center">
            <label key={i}>
              <Field type="radio" key={i} name={props.name} value={choice} />
              {choice}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export const MySearchable = ({ setFieldValue, children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Autocomplete
        {...field}
        options={children}
        onChange={(event, newValue) => {
          if (newValue === null) {
            newValue = undefined;
          }
          setFieldValue(props.name, newValue);
        }}
        autoSelect
        freeSolo
        className="text-sm font-medium text-gray-900 mt-2"
        renderInput={(params) => (
          <>
            <MyTextField
              {...params}
              {...props}
              name={props.name}
              label={props.name}
              fullWidth
            />
          </>
        )}
      />
    </>
  );
};

export const MyCheckbox = ({
  children,
  showChoices,
  toggleShowChoices,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <div
        className="flex flex-row items-center cursor-pointer border-2 border-grey p-2"
        onClick={() => toggleShowChoices(props.name)}
      >
        <span>{props.name}</span>
        <span>{showChoices[props.name] ? <ArrowUp /> : <ArrowDown />}</span>
      </div>
      <div className={`${showChoices[props.name] ? "" : "hidden"}`}>
        {children.map((choice) => {
          return (
            <label key={choice} className="m-1 flex flex-row">
              <Field
                type="checkbox"
                name={props.name}
                value={choice}
                className="m-1 border-2 border-orange-500"
              />
              {choice}
            </label>
          );
        })}
      </div>
    </div>
  );
};
