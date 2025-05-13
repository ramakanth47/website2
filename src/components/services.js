import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Services() {
  const [username, setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [errorMessage , setErrorMessage] = useState('');
  const [userType,setUserType] = useState(null)
  const navigate = useNavigate();
  const handleOnSubmit =()=>{
    let usernamedb = "robert@gmail.com";
    let passworddb =  "robert123";
    if(username === usernamedb && password === passworddb){
      navigate('/employeeregistration')
    }
  else{
    setErrorMessage('Please Enter correct username or password');
  }
}
  const handleOnSubmitEmployee =()=>{
    let usernamedb = "robert@gmail.com";
    let passworddb =  "robert123";
    if(username === usernamedb && password === passworddb){
      navigate('/employeerregistration')
    }
  else{
    setErrorMessage('Please Enter correct username or password');
  }
}
  return (
    <div>
   
    <div className='logincontainer'>
        <p id="firstheading">Login</p>
        <p id="secondheading">Sign in to access to your account</p>
       <div className="buttonscontainer">
          <button id="firstbtnp" onClick={() => setUserType("Employer")}>Employer</button>
          <button id="secondbtnp" onClick={() => setUserType("Employee")}>Employee</button>
       </div>
       {userType === "Employer" && (
        <div>
        <label id="email">Email</label>
        <input type="text" name="username" id="usrnme"  placeholder='Enter your Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <label id="email">Password</label>
        <input type="password" name="username" id="pswrdfld" placeholder='Enter your Username' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        {errorMessage && <div className='error-mesaage'>{errorMessage}</div>}
        <button id="lgnbtnp" onClick={handleOnSubmit}>Login</button>
    </div>
    )}
    {userType === "Employee" &&(
      <div>
        <label id="email">Employee Email</label>
        <input type="text" name="username" id="usrnme"  placeholder='Enter your Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <label id="email">Password</label>
        <input type="password" name="username" id="pswrdfld" placeholder='Enter your Username' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        {errorMessage && <div className='error-mesaage'>{errorMessage}</div>}
        <button id="lgnbtnp" onClick={handleOnSubmitEmployee}>Login</button>
    </div>
    )}
    </div>
  </div>
  )
}

export default Services
