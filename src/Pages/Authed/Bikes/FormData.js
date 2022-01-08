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
    options:
    [
        {
            name: 'Future',
            choices: [
                "Scrap",
                "Repair",
                "Donate"
            ]
        },
        {
            name: 'Brand',
            choices: [
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
            ]
        },
        {
            name: 'Condition',
            choices: [
                "Poor",
                "Good",
                "Excellent"
            ]
        },
        {
            name: 'Type',
            choices: [
                "Cruiser",
                "Hybrid",
                "Mountain",
                "Road"
            ]
        },
        {
            name: 'Gender',
            choices : [
                "Female",
                "Male",
                "N/A"
            ],
        },
        {
            name: 'Kid/Adult',
            choices : [
                "Adult",
                "Child",
                "N/A"
            ],
        },
        {

            name: 'Size',
            choices : [
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
            ]
        },
        {
            name: 'Received',
            choices : [
                "Becaffeinated",
                "East Ridge Bicycles",
                "Hamilton Co. Recycling",
                "Pedego",
                "Red Bank Fire Department",
                "Sweat Club",
                "Unknown"
            ]
        },
        {
            name: 'Storage',
            choices: [
                "Dodds",
                "Lookouts",
                "Red Bank",
                "WOBC"
            ]
        }
    ]
}

export default FormData