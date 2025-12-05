import React, { useState } from "react";


const Input = ({notes,setNotes}) => {
  const [ task, setTask ] = useState("");
  const [ subject, setSubject ] = useState("");
  const [ note, setNote ] = useState("");
  


  function  addNote(){
     if(task==""||subject==""||note==""){
          let a="add all fields"
          console.log(a)
          return a
     } 
   setNotes((prev)=>({...prev ,[subject]:{task:task,note:note}}))

     
     setNote("")
     setSubject("")
     setTask("")
  }
  
  return (
    < >
      <div className="outline-4 outline-purple-400">
        <input
          type="text"
          className="outline "
          placeholder="add Task"
          value={task}
          onChange={(e)=>setTask(e.target.value)}
        />
        <input
          type="text"
          className="outline "
          placeholder="add subject"
          value={subject}
          onChange={(e)=>setSubject(e.target.value)}
        />
        <input
          type="text"
          className="outline "
          placeholder="add note"
          value={note}
          onChange={(e)=>setNote(e.target.value)}
        />
      </div>
      <button onClick={addNote}>add</button>
    </>
  );
};

export default Input;
