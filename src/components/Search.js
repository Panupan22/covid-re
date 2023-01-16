import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onhandleClick = () => {
    console.log("Click");
  };

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log(searchTerm);

  return (
    <div>
      <input onChange={onInputChange} value={searchTerm} />

      <button onClick={onhandleClick}>submit</button>
    </div>
  );
};

export default Search;
