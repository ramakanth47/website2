import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
function Employeerregistration() {
    const [selectedOption ,setSelectedOption]= useState('');
     const handleOnselect =(e)=>{
   setSelectedOption(e.target.value)
 }

   const navigate = useNavigate();
   const handleOnSubmit =() =>{
      navigate('/employeesuccess')
   }   
  return (
    <div className='employeerregistrationcontainer'>
      <p id="empregestration">Employee Registration</p>
      <p id="nme">Name</p>
      <div id ="nameconttainer">
        <div>  
        <input type='text' name="firstnme" id="fstnme" placeholder='First name'/>
        </div>
        <div>
           <input type='text' name="lastnme" id="lstnme"  placeholder='Last name'/> 
        </div>
      </div>
       <p id="nme">Company Name</p>
      <input type="text" name="email" id="emailinptfld" placeholder="Email"/>
      <p id="nme">Email</p>
      <input type="text" name="email" id="emailinptfld" placeholder="Email"/>
      <p id="nme">Phone Number</p>
      <input type="text" name="phnenmbr" id="emailinptfld" placeholder="Phone number"/>
      <input type="text" name="otp" id="otpfield" placeholder="Enter OTP"/>
      
      <p id ="nme">Are you authorized to pay</p> 
       <div id ="radiobtnp">
        <div><input type="radio" value="yes"/><p id="one">yes</p></div>
         <div><input type="radio" value="no"/><p id = "two">NO</p></div>
         </div>
         <input type="text" name="phnenmbr" id="paymentfield" placeholder=""/>
       <p id="nme">Department</p>
         <select  id ="selecteddepartment"value={selectedOption}  onChange={handleOnselect}>
        <option  value="" disabled>Select a Department</option>
        <option name="hr"> Human Resources</option>
        <option name="Development">Development</option>
        <option name="Test">Testing</option>
        <option name="deployment">Production</option>
         <option name="manager">Project Manager</option>
     
      </select>
      <div id="submitbtncontainers"><div><button onClick={handleOnSubmit}>Submit</button></div><div><button>Reset</button></div></div>
    </div>
  )
}

export default Employeerregistration
