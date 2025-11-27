import React from "react";

const List = ({ notes }) => {
  return (
    <div>
      {Object.entries(notes).map((note, index) => (
        <div key={index}>
         <p>
           Subject :{note[0]} <br />
          task:{note[1][0]} <br />
          note:{note[1][0]}
         </p>
        </div>
      ))}
    </div>
  );
};

export default List;
