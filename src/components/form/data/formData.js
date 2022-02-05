import manufacturers from "./manufacturers";

export const initialValues = {
  serial: "",
  wobc_id: "",
  status: "",
  brand: "",
  style: "",
  gender: "",
  adultchild: "",
  size: "",
  storage: "",
  received: "",
};

const FormData = {
  options: [
    {
      type: "text",
      name: "serial",
    },
    {
      type: "text",
      name: "wobc_id",
    },
    {
      type: "search",
      name: "status",
    },
    {
      type: "search",
      name: "brand",
      choices: manufacturers,
    },
    {
      type: "search",
      name: "style",
    },
    {
      type: "radio",
      name: "gender",
      choices: ["Female", "Male", "Non-binary"],
    },
    {
      type: "radio",
      name: "adultchild",
      choices: ["Adult", "Child"],
    },
    {
      type: "search",
      name: "size",
    },
    {
      type: "search",
      name: "storage",
    },
    {
      type: "search",
      name: "received",
    },
  ],
};

export default FormData;
