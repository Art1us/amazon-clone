export default [
    {
      id: 1,
      name: "country",
      type: "text",
      placeholder: "Country",
      errorMessage: "Please enter your country.",
      label: "Country/Region",
      pattern:"^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$",
      required:true
    },
    {
      id: 2,
      name: "name",
      type: "text",
      placeholder: "Full name",
      errorMessage: "Please enter your name.",
      label: "Full name (First and Last name)",
      pattern: "^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$",
      required:true
    },
    {
      id: 3,
      name: "phone",
      type: "text",
      placeholder: "Phone number",
      errorMessage: "Please enter your phone number.",
      label: "Phone number",
      pattern:"^[0-9]{10,13}",
      required:true
    },
    {
      id: 4,
      name: "addressStreet",
      type: "text",
      placeholder: "Street Address or P.O. box",
      errorMessage: "Please enter your address.",
      label: "Address",
      required:false
    },
    {
      id: 5,
      name: "addressApp",
      type: "text",
      placeholder: "Apt, suite, unit, building, floor",
      errorMessage: "error",
      required:false
    },
    ,
    {
      id: 6,
      name: "city",
      type: "text",
      errorMessage: "Please enter your city.",
      pattern: '^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$',
      placeholder: 'City',
      label: "City",
      required:true
    },
    {
      id: 7,
      name: "zip",
      type: "text",
      errorMessage: "Please enter a ZIP or postal code.",
      placeholder: "ZIP",
      label: "ZIP",
      pattern: '^[0-9]{5}',
      required:true
    },
    
  ];