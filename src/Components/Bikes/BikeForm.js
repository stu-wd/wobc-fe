import React, { useEffect, useState } from "react";
import { Formik, Form, useField, Field } from "formik";
import * as Yup from "yup";
import { Autocomplete } from "formik-mui";
import MuiTextField from "@mui/material/TextField";
import fd, { initialValues } from "./Options/formData";
import { useBikes } from "../../Contexts/bikes.context";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {/* <label htmlFor={props.id || props.name}>{label}</label> */}
      <input placeholder={props.name} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyRadio = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div role="group">
      {children.map((choice, i) => {
        return (
          <label key={i}>
            <Field type="radio" key={i} name={props.name} value={choice} />
            {choice}
          </label>
        );
      })}

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ children, label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <select {...field} {...props}>
        <option disabled value="">
          {props.name}
        </option>
        {children.map((choice, i) => {
          return (
            <option key={i} value={choice}>
              {choice}
            </option>
          );
        })}
      </select>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySearchable = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Field
      name={props.name}
      component={Autocomplete}
      options={children}
      renderInput={(props) => (
        <MuiTextField
          {...props}
          name={props.name}
          label={props.name}
          variant="outlined"
        />
      )}
    />
  );
};

const BikeForm = (props) => {
  const { editBike, postBike, postMsg, putMsg, deleteBike, deleteAttempt } =
    useBikes();
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(false);
  };

  const handleOpen = () => {
    setShowModal(!showModal);
  };

  const confirmDeletion = () => {
    deleteBike(props.match.serial);
    setShowModal(false);
  };

  useEffect(() => {
    deleteAttempt.value = null;
    postMsg.value = null;
  }, [deleteAttempt.value, postMsg.value]);

  return (
    <div className="mt-4">
      {deleteAttempt.value && deleteAttempt.value.message && (
        <>{deleteAttempt.value.message}</>
      )}

      <Formik
        initialValues={props.match === true ? { ...props } : {}}
        validationSchema={Yup.object({
          serial: Yup.string().required("Required"),
          status: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting, setValues, resetForm }) => {
          values.serial = values.serial.toUpperCase();
          if (props.edit === true) editBike(values);
          if (props.add === true) postBike(values);
          // setValues(initialValues);
        }}
      >
        <Form className="flex flex-col">
          {fd.options.map((option, i) => {
            if (option.type === "text") {
              return (
                <MyTextInput
                  type={option.type}
                  key={i}
                  name={option.name}
                  className={` ${props.edit === true ? "hidden" : ""}`}
                />
              );
            }
            if (option.type === "select") {
              return (
                <MySelect
                  children={option.choices}
                  label={option.name}
                  type={option.type}
                  key={i}
                  name={option.name}
                />
              );
            }
            if (option.type === "radio") {
              return (
                <MyRadio key={i} children={option.choices} name={option.name} />
              );
            }
            if (option.type === "search") {
              return (
                <MySearchable
                  key={i}
                  name={option.name}
                  children={option.choices}
                />
              );
            }
          })}

          {props.add === true && (
            <>
              <button className="button" type="submit">
                Add new bike
              </button>

              {/* <button onClick={(e) => console.log(e)} type="reset">
                Reset
              </button> */}
            </>
          )}

          {props.edit === true && (
            <button className="button" type="submit">
              Edit
            </button>
          )}

          {/* {showModal === true && <NestedModal />} */}

          {props.delete === true && (
            <button
              className="button bg-red-300 hover:bg-red-600 focus:bg-red-600"
              type="button"
              onClick={handleOpen}
            >
              Delete
            </button>
          )}

          {putMsg.value != undefined && (
            <div>
              {putMsg.value.message} for {props.match.serial}
            </div>
          )}

          {postMsg.value != undefined && props.edit != true && (
            <div>
              {postMsg.value.message}{" "}
              {postMsg.value.newBike &&
                `for ${postMsg.value.newBike[0].serial}`}
            </div>
          )}
          <Modal open={showModal} onClose={onClose}>
            <Box sx={modalStyle}>
              <p>
                This is forever. Mainly because your developer isn't that good.
                But please be sure. Tap anywhere to cancel.
              </p>
              <button
                className="button bg-red-400 hover:bg-red-600 focus:bg-red-600"
                onClick={confirmDeletion}
              >
                Confirm deletion
              </button>
            </Box>
          </Modal>
        </Form>
      </Formik>
      <Modal open={showModal} onClose={onClose}>
        <Box sx={modalStyle}>
          <p>
            This is forever. Mainly because your developer isn't that good. But
            please be sure. Tap anywhere to cancel.
          </p>
          <button
            className="button bg-red-400 hover:bg-red-600 focus:bg-red-600"
            onClick={confirmDeletion}
          >
            Confirm deletion
          </button>
        </Box>
      </Modal>
    </div>
  );
};

export default BikeForm;
