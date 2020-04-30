import React from "react";
import "./App.css";
import guy from "./images/images.png";

const App = () => {
 return (
  <div className='grid-consultants container'>
   <div className='overlay'>
    <img src={guy} alt='' className='round-img' />
   </div>

   <div className='copy-grid'>
    <h1 className='text-primary'>
     Are you an American Tax Solutions Employee?
    </h1>
    <p className='lead'> National Tax Will Hire You Today</p> We are offering
    FULL TIME EMPLOYMENT <br />
    to all current or recently terminated American Tax Solutions
    <br /> employees with a desire to continue working in tax resolution
    <br /> after American Tax Solutions.
    <br />
    <br />
    <ul className='card bg-light' style={{ width: "300px" }}>
     <li>Benefits Include</li>
     <li>Full Health and Dental</li>
     <li>Salary Matched or Exceeded</li>
     <li>Catered Lunches</li>
    </ul>
   </div>

   <div
    className='card bg-light form-grid'
    style={{ width: "15rem", borderRadius: "10%", height: "25rem" }}>
    <form name='employee' method='post'>
     <input type='hidden' name='form-name' value='employee' />
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
     <button type='submit'>Send</button>
    </form>
   </div>
  </div>
 );
};

export default App;
