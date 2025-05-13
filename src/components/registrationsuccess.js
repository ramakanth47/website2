import React from 'react'
import tickmark from '../assests/green.jpg';

import { useNavigate } from 'react-router-dom';
function RegistrationSuccess() {
    const navigate = useNavigate();
    const handleOnSubmit =()=>{
      navigate('/scheduleassessment')
    }
  return (
    <div className='registrationsuccessscreen' >
        <img src={tickmark}alt='logo' style={{width:80,height:48,paddingTop:10}}/>
     <div style={{textAlign:'center',paddingTop:30,fontFamily:'sans-serif',fontWeight:'bold',fontSize:32,color:'#fff'}}> 
      Registration Successful </div>
     <div style={{textAlign:'center',paddingTop:28,fontFamily:'sans-serif',fontWeight:'bold',color:'#fff'}}> 
        your Employee accont created Successfully 
        </div>
     <div style={{paddingTop:10,fontFamily:'sans-serif',fontWeight:'bold',color:'#fff'}} >
      you can now proceed to schedule your assessment
      </div>
      <button style={{marginTop:18,width:180,height:50}} onClick={handleOnSubmit}>Continue to Assessment</button>
    </div>
  )
}

export default RegistrationSuccess
