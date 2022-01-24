import {
  TextField,
  NativeSelect,
  FormControl,
  InputLabel,
} from "@mui/material";
import { capitalize } from "../../../Utils/capitalize";
import { useField, Field } from "formik";

export const MyTextField = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <TextField
        {...field}
        {...props}
        margin="normal"
        fullWidth
        label={
          props.name === "confirmPassword"
            ? capitalize("Confirm Password")
            : props.name === "wobc_id"
            ? "WOBC ID (optional)"
            : capitalize(props.name)
        }
        name={props.name}
        className="block text-sm font-medium text-gray-900"
        type={
          props.name === "confirmPassword" || props.name === "password"
            ? "password"
            : "input"
        }
        autoComplete="off"
      />
    </>
  );
};

export const MySelect = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl fullWidth>
      <InputLabel variant="standard" htmlFor={props.name}>
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
