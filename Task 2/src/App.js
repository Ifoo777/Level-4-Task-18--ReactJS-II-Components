import './App.css';
// import bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Profile picture
import profilePicture from './images/photo.jpg';

import { FaMobileAlt, FaMailBulk, FaLinkedin, FaGithub, FaMapMarkerAlt, FaUserAlt, FaRegBuilding, FaUserGraduate, FaJava, FaJs, FaHtml5, FaCss3} from "react-icons/fa";

// Profile photo and basic information
const Profile = () =>
    <div class="header-left">
                    <img src={profilePicture} className="headerLogo" alt="Irfaan Osman" class="img-thumbnail rounded-circle mb-2"/>
                    <h1 class="display-5">Irfaan Osman</h1>
                    <h4 class="lead text-uppercase text-white-50 mb-4">Full Stack Web and Software Engineer
                        Student @ HyperionDev</h4>
    </div>;

    // Contact information
const ContactInformation = () =>
<div>
    <h5 class="text-uppercase bg-white text-dark py-2 rounded-piill">CONTACT INFORMATION</h5>
    <ul class="list-unstyled text-white-50 ml-5 py-2 ">
        <li class="list-item">
             <a  href="tel:0027724545712"> <FaMobileAlt/>+27 72 739 0777</a>
        </li>
        <li class="list-item">
           <a href = "mailto: ossygt3@gmail.com"> <FaMailBulk/> ossygt3@gmail.com </a>
        </li>
        <li  class="list-item">
            <a href="https://www.linkedin.com/in/irfaan-osman-31804859/"><FaLinkedin/>    /in/ifoo777/</a>
        </li>
        <li  class="list-item">
            <a href="https://github.com/Ifoo777"><FaGithub/>    /Irfaan Osman/</a>
        </li>
        <li class="list-item">
            <FaMapMarkerAlt/>
            Pretoria, South Africa
        </li>
    </ul>
</div>;

// List of skills
const Skills = () =>
    <div>
    <h5 class="text-uppercase bg-white text-dark py-2">SKILLS AND PROFICIENCIES</h5>
    <ul class="list text-white-50 ml-5 py-2  text-capitalize">
        <li class="list-item"><FaJava/> Java <FaJs/> JavaScript <FaHtml5/> HTML <FaCss3/> CSS, SQL, Full MERN Stack and more</li>
        <li class="list-item">Teamwork, multitasking and attention to detail.</li>
        <li class="list-item">Entrepreneurial skills and logical problem solving.</li>
    </ul>
</div>;

// Languages proficient
const Languages = () =>
    <div>
    <h5 class="text-uppercase bg-white text-dark py-2">LANGUAGES</h5>
    <ul class="list text-white-50 ml-5 py-2  text-capitalize">
        <li class="list-item">English</li>
        <li class="list-item">Afrikaans</li>
    </ul>
</div>;

// About me
const About = () =>
<div class="header-right">
    <h4 class="text-uppercase"><FaUserAlt/> Profile</h4>
    <hr/>
    <p>Full-Stack web and software engineering dev student entrepreneurship background.</p>
</div>;


// My Work experience
const WorkExperience = () =>
    <div>
        <h4 class="text-uppercase"><FaRegBuilding/> Work Experience</h4>
        <hr/>
        <ul class="list">
             
            <li class="list-item">
                <h5 class="text-uppercase">Owner of Tech company </h5>
                <h6 class="text-uppercase text-black-50">The PC Garage PTY LTD</h6>
                <hr/>
                <p>The PC Garage is a start up tech company bringing you unbeatable prices to the public .</p>
                <p>Current</p> <hr/>
            </li><br />
  
            <li class="list-item">
                <h5 class="text-uppercase">Application Engineer </h5>
                <h6 class="text-uppercase text-black-50">Moore Process Controls / 2021-01-01 to 2021-06-30</h6>
                <hr/>
                <p> Supported software integration and implemented maintenance enhancements.
                    Exhibited strong technical aptitude and application expertise resulting in optimized performance,continuous improvement recommendations and product innovation.
                    Partnered with development team on product development, application support plans and prototype programs.
                    Conducted research to determine client needs and implemented product testing plans.
                    Developed code to automatically prepare reports for regulatory submission..</p>               
            </li><br />    
        </ul>
    </div>;

    // My Education experience
const Education = () =>
<div>
    <h4 class="text-uppercase"> <FaUserGraduate/> EDUCATIONAL BACKGROUND</h4>
    <hr/>
    <ul class="list">
        <li class="list-item">
            <h5 class="text-uppercase">Higher National Diploma, Computer Software Engineering</h5>
            <h6 class="text-uppercase text-black-50">HyperionDev | 2023</h6>
            <hr/>
            <p>In Partnership with: University of Cape Town | The University of Edinburgh | UNISA Enterprise 
            </p> <p>Full Stack Web & Software Engineering Bootcamp</p>
        </li><br />
        <li class="list-item">
            <h5 class="text-uppercase">WW IT IQ SOLUTIONS </h5>
            <h6 class="text-uppercase text-black-50">Microsoft accredited educational institute</h6>
            <hr/>
            <p> Following qualifications certifications obtained : MCSD APP BUILDER , MCSA WEB APPS , MCSA UNIVERSAL WINDOWS PLATFORM 
            </p>
        </li><br />
    </ul>
</div>;

// Function to call all the other functions inside
function App() {
  return (
    <div class="bg-light">
     <div class="container p-5">
        <div class="row">
            <div class="col-lg-4 bg-dark text-white text-center py-4">
      
                <Profile/>
                <ContactInformation/>
                <Skills/>
                <Languages/>

            </div>
            <div class="col-lg-8 bg-light text-dark px5">

                <About/>
                <WorkExperience/>
                <Education/>
               
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;