import React, { useState } from "react";
import "./App.css";
import CountryList from "./Components/CountryList";
import Search from "./Components/Search";
import { response } from "./response";
import "h8k-components";

const title = "Country Filter";
function App() {
  // states defined
  const [searchText, setSearchText] = useState("");
  const [countries, setCountries] = useState(response);

  // handlers defined
  const handleSearchText = (e) => {
    setSearchText(e.target.value);
    // console.log("Total length: " + response.length);

    // if search text is empty then set all countries
    let items = [];
    if (searchText === "") {
      items = response;
    }
    // else show filtered ones
    else {
      items = response.filter((country) => country.includes(searchText));
    }
    // console.log("Filtered length: " + items.length);
    setCountries(items);
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <section className="w-30 justify-content-center layout-column mt-30 mx-auto">
        <Search onChangeSearchText={handleSearchText} searchText={searchText} />
        <CountryList countries={countries} />
      </section>
    </div>
  );
}

export default App;
