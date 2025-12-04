import React from "react";

const List = ({ notes,search }) => {
  // console.log(search)
  console.log(notes)
  console.log(search)
  return (
    <div>
      {notes && Object.entries(notes).map((note, index) => (
        <div key={index}>
         <p>
           Subject :{note[0]} <br />
          task:{note[1].task} <br />
          note:{note[1].note}
         </p>
        </div>
      ))
      
      }
<div>
  {
  search && search.map((subject, index) => (
    <div className="outline" key={index}>
      <p>
        Subject: {subject[0]} <br />
        task: {subject[1].task} <br/>
        note: {subject[1].note}
      </p>
    </div>
  ))
}

</div>
    </div>
  );
};

export default List;
