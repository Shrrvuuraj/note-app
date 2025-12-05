import React, { useEffect, useState, } from "react";
import Navbar from "./Navbar";
import Input from "./Input";
import List from "./List";
import Search from "./Search";


const App = () => {
  const key="notes"
  const [search, setSearch] = useState([]);
  const [notes, setNotes] = useState(()=>{
    const rawNotes=localStorage.getItem(key)
    if(!rawNotes) return []
    return JSON.parse(rawNotes)
  });

  // useEffect(() => {
  //   console.log("updated search:", search);
  // }, [search]);
useEffect(()=>{localStorage.setItem(key,JSON.stringify(notes))},[notes,key])


  return (
    <div className="">
      <Navbar />
      <div className="outline-3 outline-red-700">
        
        <Search
          notes={notes}
          search={search}
          setSearch={setSearch}
         
        />
        <Input notes={notes} setNotes={setNotes} /> 
      </div>
      <List notes={notes} search={search}  />
    </div>
  );
};

export default App;
