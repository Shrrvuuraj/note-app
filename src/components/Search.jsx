import { useState } from "react";

const Search = ({ notes, setSearch }) => {
  const [query, setQuery] = useState("");

  function found(text) {
    const results = Object.entries(notes).filter(([key, value]) => {
      return key.toLowerCase().includes(text.toLowerCase()); // ← return added
    });
    setSearch(results);
  }

  return (
    <div className="p-4 max-w-sm md:max-w-md mx-auto">
      <input
        type="text"
        className="border rounded shadow p-2  focus:outline focus:bg-white focus:shadow-lg w-full bg-gray-100 text-gray-700 placeholder:text-gray-700 transition-all duration-300 ease-in-out hover:bg-gray-400 hover:placeholder-white focus:placeholder:text-gray-700 "
        placeholder="search"
        value={query}
        onChange={(e) => {
          const text = e.target.value;
          setQuery(text);
          found(text); // ← activation moved here
        }}
      />
    </div>
  );
};

export default Search;
