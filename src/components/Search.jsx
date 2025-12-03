import React, { useState } from "react";

const Search = ({ notes }) => {
  function search() {
    const mainsearch= Object.entries(notes).filter(([key,value])=>key==seacrh )
    console.log(mainsearch)
//     console.log(notes)
  }
  const [seacrh, setsearch] = useState("");
  return (
    <div className="outline">
      <input
        type="text"
        className="outline"
        placeholder="search"
        value={seacrh}
        onChange={(e) => {
          setsearch(e.target.value);
        }}
      />
      <button onClick={search}>search</button>
      <input type="radio" className=""value="h"/>
      <input type="radio" className="" value="h" />
    </div>
  );
};

export default Search;
