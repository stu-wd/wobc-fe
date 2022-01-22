import {
  Box,
  FormControlLabel,
  TextField,
  Button,
  NativeSelect,
  FormControl,
  InputLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { capitalize } from "../../../Utils/capitalize";

export const MyTextField = ({ ...props }) => {
  return (
    <TextField
      margin="normal"
      fullWidth
      id={props.name}
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
          : ""
      }
    />
  );
};

export const MySelect = ({ children, ...props }) => {
  return (
    <FormControl fullWidth>
      <InputLabel variant="standard" htmlFor={props.name}>
        {capitalize(props.name)}
      </InputLabel>
      <NativeSelect
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
  return (
    <FormControl>
      <RadioGroup
        name={props.name}
        value={props.value}
        onChange={props.handleRadio}
      >
        {children.map((choice, i) => {
          return (
            <FormControlLabel
              control={<Radio />}
              value={choice}
              label={choice}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export const MySearchable = ({ ...props }) => {
  return (
    <>
      <TextField
        margin="normal"
        fullWidth
        name={props.name}
        onClick={() => props.toggleDisplay(props.name)}
        value={props.search}
        label={capitalize(props.name)}
        className="block text-sm font-medium text-gray-900"
        onChange={props.onChange}
        search={props.search}
        display={props.display}
        handleOptionSelect={props.handleOptionSelect}
        children={props.children}
      />
      {props.display[props.name] && (
        <Box>
          {props.children
            .filter((value) => {
              if (props.search == "" || props.search == undefined) {
                return;
              } else if (
                value.toLowerCase().includes(props.search.toLowerCase())
              ) {
                return value;
              }
            })
            .map((choice, i) => {
              return (
                <div className="border-2 border-neutral-800 p-1">
                  <span
                    className="cursor-pointer"
                    value={choice}
                    onClick={() => props.handleOptionSelect(choice, props.name)}
                  >
                    {choice}
                  </span>
                </div>
              );
            })}
        </Box>
      )}
    </>
  );
};
