import React, {useState} from "react";

const Todo =()=>{

const [title, settitle] = useState("");
const [desc, setdesc] = useState("");
const [task, settask] = useState([]);

const submitHandler=(e)=>{
    e.preventDefault()
    settask([...task, {title,desc}])
    settitle("")
    setdesc("")
}
const deleteHandler=(i)=>{
  let copy = [...task]
  copy.splice(i,1)
  settask(copy)
}

let renderTask = <h2>No Task Available</h2>
if (task.length>0){
renderTask = task.map((t,i)=>{
  return(
    <li key={i} style={{display: "flex",justifyContent: "space-between", alignItems: "center", marginBottom: "0px"}}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center",width: "50%", marginBottom: "0px"}}>
      <h5 style={{fontSize: "25px", fontWeight: "bold",width: "50%"}}>{t.title}</h5>
      <h6 style={{fontSize: "25px", fontWeight: "bold",width: "50%"}}>{t.desc}</h6>
    </div>
    <button 
    onClick={()=>{
      deleteHandler(i)
    }}
    style={{backgroundColor: "red",color: "black",border: "2px solid black",paddingRight: "10px"}}>Delete</button>
    </li>
       
  );
});
}
  return(
    <>
    <h1 style={{textAlign: "center", backgroundColor: "black", color: "white", padding: "5px",fontWeight: "bold"}}>My To Do List</h1>
    <form onSubmit={submitHandler}>
    <input type="text" placeholder="Enter Title" style={{borderStyle: "solid", margin: "5px", padding: "5px", fontSize: "25px", borderColor: "black"}}
    value={title}
    onChange={(e)=>{
      settitle(e.target.value)
    }}/>
    <input type="text" placeholder="Enter Description" style={{borderStyle: "solid", marginLeft: "175px", padding: "5px", fontSize: "25px", borderColor: "black"}}
    value={desc}
    onChange={(e)=>{
      setdesc(e.target.value)
    }}/>
    <button style={{backgroundColor: "black", color: "white", border: "rounded", padding: "4px", fontWeight: "bold", fontSize: "25px", marginLeft: "200px"}}>Add</button>
    </form>
    {/* <hr /> */}
    <div style={{padding: "10px",backgroundColor: "orange",marginTop: "20px"}}>
      <ul>
      {renderTask}
      </ul>
    </div>
    </>
  )
}
export default Todo;