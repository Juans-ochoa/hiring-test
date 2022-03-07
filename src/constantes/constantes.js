const paises = [
  //Africa
  { pais: "Algeria", continente: "AF" },
  { pais: "Angola", continente: "AF" },
  { pais: "Benin", continente: "AF" },
  { pais: "Botswana", continente: "AF" },
  { pais: "Burkina", continente: "AF" },
  { pais: "Burundi", continente: "AF" },
  { pais: "Cameroon", continente: "AF" },
  { pais: "Cape Verde", continente: "AF" },
  { pais: "Central African Republic", continente: "AF" },
  { pais: "Chad", continente: "AF" },
  { pais: "Comoros", continente: "AF" },
  { pais: "Congo", continente: "AF" },
  { pais: "Congo, Democratic Republic of", continente: "AF" },
  { pais: "Djibouti", continente: "AF" },
  { pais: "Egypt", continente: "AF" },
  { pais: "Equatorial Guinea", continente: "AF" },
  { pais: "Eritrea", continente: "AF" },
  { pais: "Ethiopia", continente: "AF" },
  { pais: "Gabon", continente: "AF" },
  { pais: "Gambia", continente: "AF" },
  { pais: "Ghana", continente: "AF" },
  { pais: "Guinea", continente: "AF" },
  { pais: "Guinea-Bissau", continente: "AF" },
  { pais: "Ivory Coast", continente: "AF" },
  { pais: "Kenya", continente: "AF" },
  { pais: "Lesotho", continente: "AF" },
  { pais: "Liberia", continente: "AF" },
  { pais: "Libya", continente: "AF" },
  { pais: "Madagascar", continente: "AF" },
  { pais: "Malawi", continente: "AF" },
  { pais: "Mali", continente: "AF" },
  { pais: "Mauritania", continente: "AF" },
  { pais: "Mauritius", continente: "AF" },
  { pais: "Morocco", continente: "AF" },
  { pais: "Mozambique", continente: "AF" },
  { pais: "Namibia", continente: "AF" },
  { pais: "Niger", continente: "AF" },
  { pais: "Nigeria", continente: "AF" },
  { pais: "Rwanda", continente: "AF" },
  { pais: "Sao Tome and Principe", continente: "AF" },
  { pais: "Senegal", continente: "AF" },
  { pais: "Seychelles", continente: "AF" },
  { pais: "Sierra Leone", continente: "AF" },
  { pais: "Somalia", continente: "AF" },
  { pais: "South Africa", continente: "AF" },
  { pais: "South Sudan", continente: "AF" },
  { pais: "Sudan", continente: "AF" },
  { pais: "Swaziland", continente: "AF" },
  { pais: "Tanzania", continente: "AF" },
  { pais: "Togo", continente: "AF" },
  { pais: "Tunisia", continente: "AF" },
  { pais: "Uganda", continente: "AF" },
  { pais: "Zambia", continente: "AF" },
  { pais: "Zimbabwe", continente: "AF" },

  //Asia
  { pais: "Afghanistan", continente: "AS" },
  { pais: "Bahrain", continente: "AS" },
  { pais: "Bangladesh", continente: "AS" },
  { pais: "Bhutan", continente: "AS" },
  { pais: "Brunei", continente: "AS" },
  { pais: "Burma (Myanmar)", continente: "AS" },
  { pais: "Cambodia", continente: "AS" },
  { pais: "China", continente: "AS" },
  { pais: "East Timor", continente: "AS" },
  { pais: "India", continente: "AS" },
  { pais: "Indonesia", continente: "AS" },
  { pais: "Iran", continente: "AS" },
  { pais: "Iraq", continente: "AS" },
  { pais: "Israel", continente: "AS" },
  { pais: "Japan", continente: "AS" },
  { pais: "Jordan", continente: "AS" },
  { pais: "Kazakhstan", continente: "AS" },
  { pais: "Korea, North", continente: "AS" },
  { pais: "Korea, South", continente: "AS" },
  { pais: "Kuwait", continente: "AS" },
  { pais: "Kyrgyzstan", continente: "AS" },
  { pais: "Laos", continente: "AS" },
  { pais: "Lebanon", continente: "AS" },
  { pais: "Malaysia", continente: "AS" },
  { pais: "Maldives", continente: "AS" },
  { pais: "Mongolia", continente: "AS" },
  { pais: "Nepal", continente: "AS" },
  { pais: "Oman", continente: "AS" },
  { pais: "Pakistan", continente: "AS" },
  { pais: "Philippines", continente: "AS" },
  { pais: "Qatar", continente: "AS" },
  { pais: "Russian Federation", continente: "AS" },
  { pais: "Saudi Arabia", continente: "AS" },
  { pais: "Singapore", continente: "AS" },
  { pais: "Sri Lanka", continente: "AS" },
  { pais: "Syria", continente: "AS" },
  { pais: "Tajikistan", continente: "AS" },
  { pais: "Thailand", continente: "AS" },
  { pais: "Turkey", continente: "AS" },
  { pais: "Turkmenistan", continente: "AS" },
  { pais: "United Arab Emirates", continente: "AS" },
  { pais: "Uzbekistan", continente: "AS" },
  { pais: "Vietnam", continente: "AS" },
  { pais: "Yemen", continente: "AS" },

  //Europe
  { pais: "Albania", continente: "EU" },
  { pais: "Andorra", continente: "EU" },
  { pais: "Armenia", continente: "EU" },
  { pais: "Austria", continente: "EU" },
  { pais: "Azerbaijan", continente: "EU" },
  { pais: "Belarus", continente: "EU" },
  { pais: "Belgium", continente: "EU" },
  { pais: "Bosnia and Herzegovina", continente: "EU" },
  { pais: "Bulgaria", continente: "EU" },
  { pais: "Croatia", continente: "EU" },
  { pais: "Cyprus", continente: "EU" },
  { pais: "CZ", continente: "EU" },
  { pais: "Denmark", continente: "EU" },
  { pais: "Estonia", continente: "EU" },
  { pais: "Finland", continente: "EU" },
  { pais: "France", continente: "EU" },
  { pais: "Georgia", continente: "EU" },
  { pais: "Germany", continente: "EU" },
  { pais: "Greece", continente: "EU" },
  { pais: "Hungary", continente: "EU" },
  { pais: "Iceland", continente: "EU" },
  { pais: "Ireland", continente: "EU" },
  { pais: "Italy", continente: "EU" },
  { pais: "Latvia", continente: "EU" },
  { pais: "Liechtenstein", continente: "EU" },
  { pais: "Lithuania", continente: "EU" },
  { pais: "Luxembourg", continente: "EU" },
  { pais: "Macedonia", continente: "EU" },
  { pais: "Malta", continente: "EU" },
  { pais: "Moldova", continente: "EU" },
  { pais: "Monaco", continente: "EU" },
  { pais: "Montenegro", continente: "EU" },
  { pais: "Netherlands", continente: "EU" },
  { pais: "Norway", continente: "EU" },
  { pais: "Poland", continente: "EU" },
  { pais: "Portugal", continente: "EU" },
  { pais: "Romania", continente: "EU" },
  { pais: "San Marino", continente: "EU" },
  { pais: "Serbia", continente: "EU" },
  { pais: "Slovakia", continente: "EU" },
  { pais: "Slovenia", continente: "EU" },
  { pais: "Spain", continente: "EU" },
  { pais: "Sweden", continente: "EU" },
  { pais: "Switzerland", continente: "EU" },
  { pais: "Ukraine", continente: "EU" },
  { pais: "United Kingdom", continente: "EU" },
  { pais: "Vatican City", continente: "EU" },

  //North America
  { pais: "Antigua and Barbuda", continente: "NA" },
  { pais: "Bahamas", continente: "NA" },
  { pais: "Barbados", continente: "NA" },
  { pais: "Belize", continente: "NA" },
  { pais: "Canada", continente: "NA" },
  { pais: "Costa Rica", continente: "NA" },
  { pais: "Cuba", continente: "NA" },
  { pais: "Dominica", continente: "NA" },
  { pais: "Dominican Republic", continente: "NA" },
  { pais: "El Salvador", continente: "NA" },
  { pais: "Grenada", continente: "NA" },
  { pais: "Guatemala", continente: "NA" },
  { pais: "Haiti", continente: "NA" },
  { pais: "Honduras", continente: "NA" },
  { pais: "Jamaica", continente: "NA" },
  { pais: "Mexico", continente: "NA" },
  { pais: "Nicaragua", continente: "NA" },
  { pais: "Panama", continente: "NA" },
  { pais: "Saint Kitts and Nevis", continente: "NA" },
  { pais: "Saint Lucia", continente: "NA" },
  { pais: "Saint Vincent and the Grenadines", continente: "NA" },
  { pais: "Trinidad and Tobago", continente: "NA" },
  { pais: "US", continente: "NA" },

  //Oceania
  { pais: "Australia", continente: "OC" },
  { pais: "Fiji", continente: "OC" },
  { pais: "Kiribati", continente: "OC" },
  { pais: "Marshall Islands", continente: "OC" },
  { pais: "Micronesia", continente: "OC" },
  { pais: "Nauru", continente: "OC" },
  { pais: "New Zealand", continente: "OC" },
  { pais: "Palau", continente: "OC" },
  { pais: "Papua New Guinea", continente: "OC" },
  { pais: "Samoa", continente: "OC" },
  { pais: "Solomon Islands", continente: "OC" },
  { pais: "Tonga", continente: "OC" },
  { pais: "Tuvalu", continente: "OC" },
  { pais: "Vanuatu", continente: "OC" },

  //South America
  { pais: "Argentina", continente: "SA" },
  { pais: "Bolivia", continente: "SA" },
  { pais: "Brazil", continente: "SA" },
  { pais: "Chile", continente: "SA" },
  { pais: "Colombia", continente: "SA" },
  { pais: "Ecuador", continente: "SA" },
  { pais: "Guyana", continente: "SA" },
  { pais: "Paraguay", continente: "SA" },
  { pais: "Peru", continente: "SA" },
  { pais: "Suriname", continente: "SA" },
  { pais: "Uruguay", continente: "SA" },
  { pais: "Venezuela", continente: "SA" },
];

const continentes = [
  { id: "AS", nombre: "Asia" },
  { id: "AF", nombre: "Africa" },
  { id: "EU", nombre: "Europe" },
  { id: "NA", nombre: "North America" },
  { id: "SA", nombre: "South America" },
  { id: "OC", nombre: "Australia/Oceania" },
];

export { paises, continentes };
