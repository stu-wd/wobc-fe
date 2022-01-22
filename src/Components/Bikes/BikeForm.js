// import React, { useEffect, useState } from "react";
// import { Formik, Form, useField, Field } from "formik";
// import * as Yup from "yup";
// import { Autocomplete } from "formik-mui";
// import TextField from "@mui/material/TextField";
// import MuiTextField from "@mui/material/TextField";
// import fd, { initialValues } from "./Options/formData";
// import { useBikes } from "../../Contexts/bikes.context";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Select from "@mui/material/Select";

import { resolveOnChange } from "antd/lib/input/Input";

// const modalStyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 200,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };

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

// const BikeForm = (props) => {
//   const { editBike, postBike, postMsg, putMsg, deleteBike, deleteAttempt } =
//     useBikes();
//   const [showModal, setShowModal] = useState(false);

//   const onClose = () => {
//     setShowModal(false);
//   };

//   const handleOpen = () => {
//     setShowModal(!showModal);
//   };

//   const confirmDeletion = () => {
//     deleteBike(props.match.serial);
//     setShowModal(false);
//   };

//   useEffect(() => {
//     deleteAttempt.value = null;
//     postMsg.value = null;
//     putMsg.value = null;
//   }, [deleteAttempt.value, postMsg.value, putMsg.value]);

//   return (
//     <div className="mt-2">
//       <Formik
//         initialValues={props.match ? { ...props.match } : {}}
//         validationSchema={Yup.object({
//           serial: Yup.string().required("Required"),
//           status: Yup.string().required("Required"),
//         })}
//         onSubmit={(values, { setSubmitting, setValues, resetForm }) => {
//           values.serial = values.serial.toUpperCase();
//           if (props.edit === true) {
//             editBike(values);
//           }
//           if (props.add === true) {
//             postBike(values);
//           }
//         }}
//       >
//         <Form className="flex flex-col">
//           {fd.options.map((option, i) => {
//             if (option.type === "text") {
//               return (
//                 <MyTextInput
//                   type={option.type}
//                   key={i}
//                   name={option.name}
//                   className={` ${props.edit === true ? "hidden" : ""}`}
//                 />
//               );
//             }
//             if (option.type === "select") {
//               return (
//                 <MySelect
//                   children={option.choices}
//                   label={option.name}
//                   type={option.type}
//                   key={i}
//                   name={option.name}
//                 />
//               );
//             }
//             if (option.type === "radio") {
//               return (
//                 <MyRadio key={i} children={option.choices} name={option.name} />
//               );
//             }
//             if (option.type === "search") {
//               return (
//                 <MySearchable
//                   key={i}
//                   name={option.name}
//                   children={option.choices}
//                   placeholder={option.name}
//                 />
//               );
//             }
//           })}

//           <button className="button mt-2" type="submit">
//             {props.add === true && `Add New Bike`}
//             {props.edit === true && props.add === undefined && `Edit Bike`}
//           </button>

//           {props.delete === true && (
//             <button
//               className="button bg-red-300 hover:bg-red-600 focus:bg-red-600 mt-2"
//               type="button"
//               onClick={handleOpen}
//             >
//               Delete
//             </button>
//           )}

//           {putMsg.value != undefined && (
//             <div>
//               {putMsg.value.message} for {props.match && props.match.serial}
//             </div>
//           )}

//           {postMsg.value != undefined && props.edit != true && (
//             <div>
//               {postMsg.value.message}{" "}
//               {postMsg.value.newBike &&
//                 `for ${postMsg.value.newBike[0].serial}`}
//             </div>
//           )}

//           {deleteAttempt.value && deleteAttempt.value.message && (
//             <>{deleteAttempt.value.message}</>
//           )}
//         </Form>
//       </Formik>
//       <Modal open={showModal} onClose={onClose}>
//         <Box sx={modalStyle}>
//           <p>
//             This is forever. Mainly because your developer isn't that good. But
//             please be sure. Tap anywhere to cancel.
//           </p>
//           <button
//             className="button bg-red-400 hover:bg-red-600 focus:bg-red-600"
//             onClick={confirmDeletion}
//           >
//             Confirm deletion
//           </button>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default BikeForm;

import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
  NativeSelect,
  FormControl,
  InputLabel,
  FormGroup,
  FormLabel,
  RadioGroup,
  Radio,
  Autocomplete,
  Input,
} from "@mui/material";
import WOBCLogo from "../../Images/wobclogotransparent.png";
import { useAuth } from "../../Contexts/auth.context";
import { Circles } from "react-loading-icons";
import { capitalize } from "../../Utils/capitalize";
import fd, { initialValues } from "./Options/formData";
import manufacturers from "./Options/brands";
import { useSearchParams } from "react-router-dom";

const MyTextField = ({ ...props }) => {
  return (
    <TextField
      margin="normal"
      fullWidth
      id={props.name}
      label={
        props.name === "confirmPassword"
          ? capitalize("Confirm Password")
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

const MySelect = ({ children, ...props }) => {
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

const MyRadio = ({ children, ...props }) => {
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

const MySearchable = ({ ...props }) => {
  console.log(props.search);
  return (
    <>
      <TextField
        margin="normal"
        fullWidth
        id={props.name}
        name={props.name}
        onClick={() => props.toggleDisplay(props.name)}
        value={props.search}
        label={capitalize(props.name)}
        className="block text-sm font-medium text-gray-900"
        onChange={props.onChange}
        search={props.search}
        display={props.display}
        handleSearchClick={props.handleSearchClick}
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
                <div>
                  <span
                    value={choice}
                    onClick={() => props.handleSearchClick(choice, props.name)}
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

const BikeForm = () => {
  const [radios, setRadios] = useState({
    gender: false,
    storage: false,
    adultchild: false,
  });
  const [display, setDisplay] = useState({
    brand: false,
    received: false,
  });
  const [search, setSearch] = useState({
    brand: "",
    received: "",
  });

  const handleRadio = (event) => {
    setRadios({
      ...radios,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);

    const formSubmit = {
      serial: values.get("serial"),
      status: values.get("status"),
      gender: values.get("gender"),
      adultchild: values.get("adultchild"),
      storage: values.get("storage"),
      style: values.get("style"),
      brand: values.get("brand"),
      size: values.get("size"),
      received: values.get("received"),
    };
    console.log(formSubmit);
  };

  const handleSearchClick = (selection, name) => {
    console.log(selection, name);
    setSearch({
      ...search,
      [name]: selection,
    });
    setDisplay(false);
  };
  console.log("search: ", search);
  console.log("display: ", display);

  const onSearch = (event) => {
    console.log(event);
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    });
  };

  const toggleDisplay = (name) => {
    if (name === "brand") {
      setDisplay({
        brand: true,
        received: false,
      });
    }
    if (name === "received") {
      setDisplay({
        brand: false,
        received: true,
      });
    }
  };

  return (
    <Box className="flex flex-col items-center">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
                <MySearchable
                  name={o.name}
                  handleSearchClick={handleSearchClick}
                  setSearch={setSearch}
                  search={search[o.name]}
                  label={capitalize(o.name)}
                  toggleDisplay={toggleDisplay}
                  onChange={onSearch}
                  children={o.choices}
                  display={display}
                  handleSearchClick={handleSearchClick}
                />
                {/* {display[o.name] && (
                  <Box>
                    {o.choices
                      .filter((value) => {
                        if (
                          search[o.name] == "" ||
                          search[o.name] == undefined
                        ) {
                          return;
                        } else if (
                          value
                            .toLowerCase()
                            .includes(search[o.name].toLowerCase())
                        ) {
                          return value;
                        }
                      })
                      .map((choice, i) => {
                        return (
                          <div>
                            <span
                              value={choice}
                              onClick={() => handleSearchClick(choice, o.name)}
                            >
                              {choice}
                            </span>
                          </div>
                        );
                      })}
                  </Box>
                )} */}
              </>
            );
          }
        })}

        <Button type="submit" fullWidth variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default BikeForm;
