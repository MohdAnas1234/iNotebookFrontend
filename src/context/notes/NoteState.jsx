// import react from "react";
import { Await } from "react-router-dom";
import NoteContext from "./NotesContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "https://inotebookbackend-x5pb.onrender.com"
const notesInitial =[

]

    const [notes, setNotes] = useState(notesInitial);


    //Get all Note
const getNotes = async ()=>{
    
     //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`,{
        method:'GET',
        headers:{
            'Content-type': 'application/json',
    

            "auth-token" :   localStorage.getItem("token")
        },
    });
    const json = await response.json()
console.log(json)
setNotes(json)

}

//Add a Note
const addNote = async (title,description,tag)=>{
    //TOdo api call
     //API call
    const response = await fetch(`${host}/api/notes/addnote`,{
        method:'POST',
        headers:{
            'Content-type': 'application/json',
           
            "auth-token" :   localStorage.getItem("token")
        },
        body:JSON.stringify({title,description,tag})
    });
const note = await response.json();
setNotes(notes.concat(note))
// console.log(json)
//   console.log("Adding a new note")
//   const note = json

// setNotes([...notes, json])
}


//Delete Note
const deleteNote = async (id)=>{
 const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
        method:'DELETE',
        headers:{
            'Content-type': 'application/json',
           
            "auth-token" :  localStorage.getItem("token")
        },
    });
const json =  response.json();
console.log(json)
   const newNotes = notes.filter((note)=>{return note._id!==id});
    setNotes(newNotes)

}


//Edit Note
const editNote = async (id,title,description,tag)=>{
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
        method:'PUT',
        headers:{
            'Content-type': 'application/json',
           
            "auth-token" :   localStorage.getItem("token")
        },
        body:JSON.stringify({title,description,tag})
    });
const json = await response.json();
console.log(json)
let newNotes = JSON.parse(JSON.stringify(notes));

// logic to edit in client
for(let index=0;index<newNotes.length;index++){
    const element = newNotes[index];
    if(newNotes[index]._id === id){
        newNotes[index].title=title;
        newNotes[index].description=description;
        newNotes[index].tag=tag;
        break;
    }
}
setNotes(newNotes);
}

   

    return (
        <NoteContext.Provider value={{notes , deleteNote, editNote, addNote, getNotes }}>
    
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;