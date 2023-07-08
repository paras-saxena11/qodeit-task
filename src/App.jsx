import Select from "react-select"; // I used this for the select input tag in the form.
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const options = [
    { value: "Research Paper", label: "Research Paper" },
    { value: "Research Proposal", label: "Research Proposal" },
    { value: "Speech", label: "Speech" },
    { value: "Thesis", label: "Thesis" },
    { value: "Thesis Paper", label: "Thesis Paper" },
    { value: "Thesis Proposal", label: "Thesis Proposal" },
  ]; // options of the select input in form

  const [price, setPrice] = useState(); // initialized the price state using useState hook
  const [paper, setPaper] = useState(null); // same for the type of paper input 
  const [dob, setDob] = useState(null); // same for the deadline
  const [page, setPage] = useState(1); // this to store state of pages

  //After this I initialised the price with default value of 12 as given of "Academic Writing", used useEffect as it runs only once during rendering
  useEffect(() => {
    setPrice(12);
  }, [])

  //here are the handler functions for setting the price as per given selection. I donot know the format of data that is why I
  //used these separate handler to set price for different selections
  const academicHandler = (e) => {
    e.preventDefault();
    setPrice(12);
  }
  const editingHandler = (e) => {
    e.preventDefault();
    setPrice(3);
  }
  const calcHandler = (e) => {
    e.preventDefault();
    setPrice(18);
  }
  const highHandler = (e) => {
    e.preventDefault();
    setPrice(18);
  }
  const underHandler = (e) => {
    e.preventDefault();
    setPrice(23);
  }
  const bachHandler = (e) => {
    e.preventDefault();
    setPrice(32);
  }
  const profHandler = (e) => {
    e.preventDefault();
    setPrice(38);
  }
  const handleChange = (selectedOption) => {
    setPaper(selectedOption);
  };

  //This is called when form is submitted, it check whether all fields are filled then only do simple work to give alert
  //As not mentioned in tast what to do after submitting. so i only displayed alert
  const submitHandler = (e) => {
    e.preventDefault();
    if(!paper || !page || !dob){
      alert('fill all details')
    }
    else
    alert('Your data has been submitted')
  }

  return (
    //basically it have main container in which it have 2 divs for form and buttons section
    <div className="container">
      <div className="btn-box">
        <div className="tier-1">
          <button className="btn-name" onClick={academicHandler}>Academic Writing</button>
          <button className="btn-name" onClick={editingHandler}>Editing and Proofreading</button>
          <button className="btn-name" onClick={calcHandler}>Calculations</button>
        </div>
        <div className="tier-2">
          <button className="btn-name" onClick={highHandler}>HighSchool</button>
          <button className="btn-name" onClick={underHandler}>Undergraduate</button>
          <button className="btn-name" onClick={bachHandler}>Bachelor</button>
          <button className="btn-name" onClick={profHandler}>Professional</button>
        </div>
      </div>

      {/* here form part starts */}
      <form className="formContainer" onSubmit={submitHandler}>
        <div>
          <div className="selection">
            <label>Type of paper</label>
            <Select options={options} id="types" autoFocus={true} required onChange={handleChange}/>
          </div>
          <div className="form-2">
            <div>
              <label htmlFor="quantity">Quantity</label>
              <input type="number" id="quantity" required value={page} onChange={(e) => (setPage(e.target.value))}/>
            </div>
            <div>
              <label htmlFor="deadline">Deadline</label>
              <input type="date" id="deadline" required value={dob} onChange={(e) => (setDob(e.target.value))}/>
            </div>
          </div>
        </div>
        <div className="tier-3">
          
          {/* Here is displayed price based on the different selections made by user */}
          <p>${price * page}</p>
          <button className="order" >PLACE YOUR ORDER</button>
        </div>
      </form>
    </div>
  );
}

export default App;
