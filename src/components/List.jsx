import React from "react";

const List = ({ notes, search }) => {
  // console.log(search)
  console.log(notes);
  console.log(search);
  return (
    <>
      {search &&
        search.map((subject, index) => (
          <div className="outline" key={index}>
            <p>
              Subject: {subject[0]} <br />
              task: {subject[1].task} <br />
              note: {subject[1].note}
            </p>
          </div>
        ))}
    </>
  );
};

export default List;
