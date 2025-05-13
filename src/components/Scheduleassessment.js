import React from 'react'
import '../App.css';
import { useState } from 'react';
//import { useState } from 'react';
import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import ReactDatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
import vectorlogo from '../assests/vector.png';
function Scheduleassessment() {
 const [selectedOption ,setSelectedOption]= useState('');
  const [selectedDate, setSelectedDate] = useState(null);
 // const [selectedTime, setSelectedTime] = useState(null);
 const handleOnselect =(e)=>{
   setSelectedOption(e.target.value)
 }
 
 // const handleChange = (time) => {
  //  setSelectedTime(time);
 // };
    const navigate = useNavigate();
    const handleOnSubmit =()=>{
      navigate('/services')
    }
 return (
    <>   
     <SlArrowLeft  onClick={handleOnSubmit}  style={{marginLeft:105, marginTop:10, marginBottom:20}}/>
    <div className='scheduleassessmentscreen'>
      <div style={{textAlign:'center',paddingTop:30,fontFamily:'sans-serif',fontWeight:'bold',fontSize:32,color:'#fff'}}>Schedule Assessment</div>
      <div style={{textAlign:'center',paddingTop:10,color:'#fff',fontWeight:'bold',fontSize:15}}>Register for your Preferred skill Assessment Slot</div>
      <div style={{textAlign:'center', paddingTop:10,color:'#fff',fontWeight:'bold'}}>Great!!! multiple employers have authorised to take a skill assessment with SkillXWiZZ .Choose one </div>
      <div style={{textAlign:'center',paddingTop:10,color:'#ffff',fontWeight:'bold'}}>You can revisit this page to Schedule for others</div>
      <div className='companynames'>
        <div>Microsoft</div>
        <div>Google</div>
        <div>Amazon</div>
        <div>Facebook</div>
        <div>Apple</div>
      </div>
      
      <div>
        <div style={{textAlign:'center', marginTop:300, fontWeight:'bold' ,color:'#fff', fontSize:18}}><img src={vectorlogo} alt="vector" style={{width:25,height:20, paddingRight:5}}/>Microsft has authorized you to take an assessment for C# , SQL </div>
        <div style={{textAlign:'left', paddingLeft:280, fontWeight:'bold',fontSize:18, color:'#fff'}}>server web 2.0 and React .</div>
      </div>
      <label id="country">Select Country</label>
        <select  id ="selectedinput"value={selectedOption}  onChange={handleOnselect}>
        <option  value="" disabled>Select a country</option>
        <option name="India"> India</option>
        <option name="china">China</option>
        <option name="usa">USA</option>
        <option name="uk">UK</option>
        <option name="germany">Germany</option>
        <option name="frsnnce">France</option>
        <option name="dubai">dubai</option>
        <option name="ireland">Ireland</option>
        <option name="mexica">Mexico</option>
        <option name="brazil">Brazil</option>
        <option name="sweden">Sweden</option>
        <option name="denmark">Denmark</option>
        <option name="finald">Finland</option>
        <option name="norway">Norway</option>
        <option name="russia">Russia</option>
        <option name="japn">Japan</option>
        <option name="southkorea">South Korea</option>
      </select>
      <label id="country">Enter your center</label>
        <select  id ="selectedinput"value={selectedOption}  onChange={handleOnselect}>
        <option  value="" disabled>Enter your center</option>
        <option name="India"> New Delhi</option>
        <option name="china">Beijing</option>
        <option name="usa">New york</option>
        <option name="uk">London</option>
        <option name="germany">Frankfurt</option>
        <option name="frsnnce">Paris</option>
        <option name="dubai">Abu dhabhi</option>
        <option name="ireland">Dublin</option>
        <option name="mexica">Mexico City</option>
        <option name="brazil">Rio die Janerio</option>
        <option name="sweden">Stockholm</option>
        <option name="denmark">Copenhagem</option>
        <option name="finald">Helsinki</option>
        <option name="norway">Oslo</option>
        <option name="russia">Moscow</option>
        <option name="japn">Tokyo</option>
        <option name="southkorea">Seoul</option>
      </select>
      <label id="country">Enter your Zipcode</label>
        <select  id ="selectedinput"value={selectedOption}  onChange={handleOnselect}>
        <option  value="" disabled>Enter your Zipcode</option>
        <option name="India">110001</option>
        <option name="china">065001</option>
        <option name="usa">07008</option>
        <option name="uk">06320</option>
        <option name="germany">60311</option>
        <option name="frsnnce">70123</option>
        <option name="dubai">20004</option>
        <option name="ireland">43016</option>
        <option name="mexica">01040</option>
        <option name="brazil">27660-000</option>
        <option name="sweden">11120</option>
        <option name="denmark">1054</option>
        <option name="finald">00150</option>
        <option name="norway">0050</option>
        <option name="russia">103274</option>
        <option name="japn">100-0004</option>
        <option name="southkorea">01004</option>
      </select>
      <div className='datetime'>
        <div>
       <label id="country">Select a Date</label>
        <DatePicker
          id ="dateselector"
          selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat="MM/dd/yyyy"
          placeholderText="mm/dd/yyyy"
        />
        </div>
         <div>
          <label id="country">Select a Time</label>
        <select  id ="timeselector"value={selectedOption}  onChange={handleOnselect}>
        <option  value="" disabled>Hours | Minutes |seconds | AM  </option>
        <option name="India">09: 00 : 00 AM</option>
        <option name="India">09: 30 : 00 AM</option>
        <option name="India">10: 00 : 00 AM</option>
        <option name="India">10: 30 : 00 AM</option>
        <option name="India">11: 00 : 00 AM</option>
        <option name="India">11: 30 : 00 AM</option>
        <option name="India">12: 00 : 00 AM</option>
        <option name="India">12: 30 : 00 AM</option>
       </select>
    </div>
      </div>
      <button id="submitbuttoncontainerschedleass">Submit</button>
    </div>
   </>
  )
}

export default Scheduleassessment
 