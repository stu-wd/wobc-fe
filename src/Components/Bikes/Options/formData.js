// import manufacturers from "../brands";
import manufacturers from "./brands";

export const sizes = [
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
];

const FormData = {
  options: [
    {
      type: "text",
      name: "serial",
    },
    {
      type: "select",
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
    // {
    //   type: "radio",
    //   name: "condition",
    //   choices: ["Poor", "Good", "Excellent"],
    // },
    {
      type: "select",
      name: "type",
      choices: ["Comfort", "Cruiser", "Hybrid", "Mountain", "Road"],
    },
    {
      type: "radio",
      name: "gender",
      choices: ["Female", "Male"],
    },
    {
      type: "radio",
      name: "adultchild",
      choices: ["Adult", "Child"],
    },
    {
      type: "select",
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
      type: "radio",
      name: "storage",
      choices: ["Dodds", "Lookouts", "Red Bank", "WOBC"],
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
      ],
    },
  ],
};

export default FormData;
