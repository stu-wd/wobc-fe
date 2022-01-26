import {
  TextField,
  NativeSelect,
  FormControl,
  InputLabel,
} from "@mui/material";
import { capitalize } from "../../utils/capitalize";
import { useField, Field } from "formik";

export const MyTextField = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div
        className={`mt-4 ${
          meta.error || (meta.touched && meta.error)
            ? `border-2 border-red-600 rounded-md`
            : ""
        }`}
      >
        <TextField
          {...field}
          {...props}
          fullWidth
          // required={
          //   props.name === "serial" || props.name === "status" ? true : false
          // }
          label={
            props.name === "confirmPassword"
              ? capitalize("Confirm Password")
              : props.name === "wobc_id"
              ? "WOBC ID (optional)"
              : capitalize(props.name)
          }
          name={props.name}
          className={`text-sm font-medium text-gray-900 ${
            meta.error || (meta.touched && meta.error)
              ? "border-2 border-red-600"
              : ""
          }`}
          type={
            props.name === "confirmPassword" || props.name === "password"
              ? "password"
              : "input"
          }
          autoComplete="off"
        />
      </div>
      {/* <div> */}
      {/* {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null} */}
      {/* </div> */}
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

// const MyTextInput = ({ label, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <div
//       className={`mt-2 ${
//         meta.error || (meta.touched && meta.error)
//           ? `border-2 border-red-600 rounded-md`
//           : ""
//       }`}
//     >
//       <MuiTextField
//         // placeholder={props.name}
//         required
//         {...field}
//         {...props}
//         label={props.name}
//         fullWidth
//         // defaultValue={props.name}
//       />
//       {/* {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null} */}
//     </div>
//   );
// };

// const MyRadio = ({ children, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <div className="grid grid-cols-2 justify-center justify-items-start">
//       {children.map((choice, i) => {
//         return (
//           <div key={i} className="mt-2 flex justify-items-center items-center">
//             <label key={i}>
//               <Field type="radio" key={i} name={props.name} value={choice} />
//               {choice}
//             </label>
//           </div>
//         );
//       })}

//       {/* {meta.touched && meta.error ? (
//         <div className="error">{meta.error}</div>
//       ) : null} */}
//     </div>
//   );
// };

// const MySelect = ({ children, label, ...props }) => {
//   const [field, meta] = useField(props);

//   return (
//     <div
//       className={`mt-2 ${
//         meta.error || (meta.error && meta.touched)
//           ? `border-2 border-red-600 rounded-md`
//           : ""
//       }`}
//     >
//       <select {...field} {...props}>
//         <option selected value="null">
//           {label}
//         </option>
//         {children.map((choice, i) => {
//           return (
//             <option key={i} value={choice}>
//               {choice}
//             </option>
//           );
//         })}
//       </select>
//     </div>
//   );
// };

// const MySearchable = ({ placeholder, children, ...props }) => {
//   const [field, meta] = useField(props);
//   return (
//     <Field
//       className="mt-2 p-0"
//       name={props.name}
//       component={Autocomplete}
//       options={children}
//       label={props.name}
//       renderInput={(props) => (
//         <TextField
//           {...props}
//           name={props.name}
//           placeholder={placeholder}
//           className="mt-2 p-0"
//           variant="standard"
//         />
//       )}
//     />
//   );
// };