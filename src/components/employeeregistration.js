import React from 'react'
import { useNavigate } from 'react-router-dom'
function Employeeregistration() {
  const navigate = useNavigate();
  const handleOnSubmit =() =>{
     navigate('/registrationsuccess')
  }
  return (
    <div className='employeeregistrationcontainer'>
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
      <p id="nme">Email</p>
      <input type="text" name="email" id="emailinptfld" placeholder="Email"/>
      <p id="nme">Phone Number</p>
      <input type="text" name="phnenmbr" id="emailinptfld" placeholder="Phone number"/>
      <input type="text" name="otp" id="otpfield" placeholder="Enter OTP"/>
       <p id="nme">Upload Resume</p>
      <input type="text" name="phnenmbr" id="emailinptfld" placeholder="Upload resume"/>
      <div id="submitbtncontainers"><div><button onClick={handleOnSubmit}>Submit</button></div><div><button>Reset</button></div></div>
    </div>
  )
}

export default Employeeregistration
