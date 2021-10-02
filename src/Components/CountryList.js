import React from "react";

function CountryList({ countries }) {
  // make a list of countries to render
  const countriesList = countries.map((country) => (
    <li key={country} className="pa-10 pl-20">
      {country}
    </li>
  ));
  return (
    <section>
      <ul className="card country-list" data-testid="countryList">
        {countriesList}
      </ul>
    </section>
  );
}

export default CountryList;
