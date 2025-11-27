import React, { useState } from "react";
import Navbar from "./Navbar";
import Input from "./Input";
import List from "./List";

const App = () => {
  const [notes,setNotes]=useState({})
  return (
    <div className="w-full h-screen bg-fuchsia-100">
      <Navbar />
      <div className="px-20 flex outline justify-between">
        <div className="playful text-amber-300 flex flex-col  relative">
         
          <p className="relative">Note </p>
          <p className="absolute top-40 left-40  translate-x-20 ">App</p>
        </div>
        <Input notes={notes} setNotes={setNotes}/>
      </div>
      <List notes={notes}/>
    </div>
  );
};

export default App;
