import React from "react";

const List = ({ notes,search }) => {
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
      ))
      
      }
<div>
  {
    search && Object.entries(search).map((seacrh,index)=>(
      <div key={index}>
        <p>
           Subject :{seacrh[0]} <br />
          task:{seacrh[1][0]} <br />
          seacrh:{seacrh[1][0]}
         </p>
      </div>
    ))
  }
</div>
    </div>
  );
};

export default List;
