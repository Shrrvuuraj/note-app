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
    <div className="w-full h-screen bg-fuchsia-100">
      <Navbar />
      <div className="px-20 flex outline justify-between">
        <div className="playful text-amber-300 flex flex-col  relative">
          <p className="relative">Note </p>
          <p className="absolute top-40 left-40  translate-x-20 ">App</p>
        </div>
        <Input notes={notes} setNotes={setNotes} /> ``
        <Search
          notes={notes}
          search={search}
          setSearch={setSearch}
         
        />
      </div>
      <List notes={notes} search={search}  />
    </div>
  );
};

export default App;
