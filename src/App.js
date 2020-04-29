import React from "react";
import "./App.css";

const App = () => {
 return (
  <div className='container'>
   <h3>Are you a current or recent American Tax Solutions Employee?</h3>
   <h4>National Tax Experts Will Hire You Directly</h4>
   <p>
    We are offering FULL TIME EMPLOYMENT to all current or recently terminated
    American Tax Solutions employees with a desire to continue working in tax
    resolution after American Tax Solutions. An opportunity to speak with HR
    directly is guaranteed, if you are current skilled employee especially in
    resolution a trial offer is all but guaranteed, and all employees enjoy the
    following:{" "}
   </p>
   <ul>
    <li>Above average pay</li>
    <li>Catered lunches</li>
    <li>Full Health Benefits</li>
    <li>
     A long term secure position in a company that has been around for 10 plus
     years.
    </li>
   </ul>
   <br />
   <div className='card' style={{ width: "15rem" }}>
    <form name='employee' method='post' data-netlify='true'>
     <label htmlFor='name'>Name</label>
     <input type='text' name='name' />
     <label htmlFor='position'>Position</label>
     <input type='text' name='position' />
     <label htmlFor='salary'>Current or Final Salary </label>
     <input type='text' name='salary' />
     <label htmlFor='name'>Phone Number</label>
     <input type='text' name='number' />
     <label htmlFor='name'>Email</label>
     <input type='email' name='email' />
     <input type='submit' />
    </form>
   </div>
  </div>
 );
};

export default App;
