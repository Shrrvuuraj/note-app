import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen h-20 bg-fuchsia-300  flex flex-row justify-between items-center p-10 ">
      <h2>Note App</h2>
      <div className=" flex w-25 justify-between
      ">
        <button className="" >Login</button>
        <button>Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
