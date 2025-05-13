import websitelogo from './assests/websitelogo.png';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Aboutus from './components/aboutus';
import Home from './components/home';
import Blog from "./components/blog";
import Footer from './components/Footer';
import Services from './components/services';
import Employeeregistration from './components/employeeregistration';
import Employeerregistration from './components/employeerregistration';
import RegistrationSuccess from './components/registrationsuccess';
import Scheduleassessment from './components/Scheduleassessment';
import EmployeeSuccess from './components/employeesuccess';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container d-flex flex-column min-vh-100">
        <nav className="App-header">
          <ul className="d-flex align-items-center gap-4">
            <img src={websitelogo} className="App-logo" alt="logo" />
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to ="/services">Services</Link></li>
          </ul>
        </nav>

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path ="/Services" element={<Services/>}/>
            <Route path="/blog" element={<Blog />} />
            <Route path = "/employeeregistration" element={<Employeeregistration/>}/>
          <Route path ="/registrationsuccess" element={<RegistrationSuccess/>}/>
          <Route path ="/scheduleassessment" element={<Scheduleassessment/>}/>
          <Route path ="/employeerregistration" element={<Employeerregistration/>}/>
          <Route path = "/employeesuccess" element={<EmployeeSuccess/>}/>
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
