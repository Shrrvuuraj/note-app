

const Search = ({ notes, seacrh, setsearch,setMainsearch,mainsearch }) => {
  function search() {
     setMainsearch(Object.entries(notes).filter(
      ([key, value]) => key == seacrh
    ));
    console.log(mainsearch);
    console.log(notes)
   
  }

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
      <input type="radio" className="" value="h" />
      <input type="radio" className="" value="h" />
    </div>
  );
};

export default Search;
