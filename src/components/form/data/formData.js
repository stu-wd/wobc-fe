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
      choices: [
        "Scrapped",
        "Scrap",
        "Repair",
        "Inspection",
        "Ready",
        "Donated",
      ],
    },
    {
      type: "search",
      name: "brand",
      choices: manufacturers,
    },
    {
      type: "select",
      name: "style",
      choices: ["Comfort", "Cruiser", "Hybrid", "Mountain", "Road"],
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
      choices: [
        "12/12.5 in",
        "16 in",
        "18 in",
        "20 in",
        "24 in",
        "26 in",
        "27 in",
        "29 in",
        "650 cc",
        "700 cc",
      ],
    },
    {
      type: "search",
      name: "storage",
      choices: ["Dodds", "Lookouts", "North Chatt", "Red Bank", "WOBC"],
    },
    {
      type: "search",
      name: "received",
      choices: [
        "Becaffeinated",
        "East Ridge Bicycles",
        "Hamilton Co. Recycling",
        "Pedego",
        "Red Bank Fire Department",
        "Sweat Club",
        "Donor",
      ],
    },
  ],
};

export default FormData;
