const FormData = {
    initialFormValues: {
        serial: '',
        future: '',
        condition: '',
        type: '',
        size: '',
        brand: '',
        gender: '',
        kidadult: '',
        received: '',
        storage: '',
    },
    futures: [
        "Scrap",
        "Repair",
        "Donate"
    ],
    brands: [
        "Cannondale",
        "GT",
        "Giant",
        "Kona",
        "Marin",
        "Merida",
        "Raleigh",
        "Santa Cruz",
        "Scott",
        "Specialized",
        "Trek",
        "Not Listed"
    ],
    conditions: [
        "Poor",
        "Good",
        "Excellent"
    ],
    types:[
        "Cruiser",
        "Hybrid",
        "Mountain",
        "Road"
    ],
    sizes:[
        "12/12.5 in",
        "16 in",
        "18 in",
        "20 in",
        "24 in",
        "26 in",
        "27 in",
        "29 in",
        "650 cc",
        "700 cc"
    ],
    genders:[
        "Female",
        "Male",
        "N/A"
    ],
    kidadult:[
        "Adult",
        "Child",
        "N/A"
    ],
    received:[
        "Becaffeinated",
        "East Ridge Bicycles",
        "Hamilton Co. Recycling",
        "Pedego",
        "Red Bank Fire Department",
        "Sweat Club",
        "Unknown"
    ],
    storages:[
        "Dodds",
        "Lookouts",
        "Red Bank",
        "WOBC"
    ]
}

export default FormData