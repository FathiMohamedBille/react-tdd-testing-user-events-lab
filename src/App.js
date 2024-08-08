import React, { useState } from 'react'; 
function App() { const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [interests, setInterests] = useState([]); 
const [submitted, setSubmitted] = useState(false); 
const handleSubmit = (e) => { e.preventDefault(); 
setSubmitted(true);
 };
const handleInterestChange = (e) => { 
const { value, checked } = e.target;
setInterests((prev) => checked ? [...prev, value] : prev.filter((interest) => interest !== value) ); 
};
 return ( 
 <div> <h1>Newsletter Signup</h1> <form onSubmit={handleSubmit}> <div> <label htmlFor="name">Name:</label>
  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /> </div>
   <div> <label htmlFor="email">Email:</label> 
   <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} /> </div>
    <div> <fieldset> <legend>Interests:</legend> <label>
     <input type="checkbox" value="Tech" onChange={handleInterestChange} /> Tech </label> 
    <label> <input type="checkbox" value="Sports" onChange={handleInterestChange} /> Sports </label> 
    <label> <input type="checkbox" value="Music" onChange={handleInterestChange} /> Music </label>
     </fieldset> </div> <button type="submit">Submit</button> </form> 
     {submitted && ( <div> <p>Thank you, {name}, for signing up!</p>
      <p>Your interests are: {interests.join(', ')}</p> </div> )} </div>
      );
     }
      export default App;
