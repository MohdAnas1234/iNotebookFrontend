// import { useContext } from "react"
// import AddNote from './AddNote';
import Notes from './Notes';

const Home = (props) => {
 const {showAlert}=props
  return (
    <div>
     
      <Notes showAlert={showAlert}/>
    </div>
  )
}

export default Home


// import React from "react";
// import { Navigate } from "react-router-dom";
// import Notes from "./Notes";

// const Home = ({ showAlert }) => {
  
//   // Block this page if token does not exist
//   if (!localStorage.getItem("token")) {
//     return <Navigate to="/login" replace />;
//   }

//   return (
//     <div>
//       <Notes showAlert={showAlert} />
//     </div>
//   );
// };

// export default Home;
