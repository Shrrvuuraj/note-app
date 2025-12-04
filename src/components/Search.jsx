import { useState } from "react";


const Search = ({ notes, setSearch }) => {
  function found() { 
     const result=Object.entries(notes).filter(([key,value])=>key.toLowerCase().includes(query.toLowerCase()))
     setSearch(result)
    setQuery("")
   
  }
  const [query,setQuery]=useState("")

  return (
    <div className="outline">
      <input
        type="text"
        className="outline"
        placeholder="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }
      }
      />
      <button onClick={found}>search</button>
      <input type="radio" className="" value="h" />
      <input type="radio" className="" value="h" />
    </div>
  );
};

export default Search;
