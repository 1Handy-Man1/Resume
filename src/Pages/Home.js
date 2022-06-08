import Me from "../Images/me.jpg";
import DV from "../Images/Deer Valley.jpg";
import TS from "../Images/Technical Skill.jpg";
import WM from "../Images/West-MEC.jpg";
import TA from "../Images/Tech Associate.jpg";
import '../style/main.css';

export default function Home(){
    return(
        <div>
            
            <div className="header">
                <div><img src={Me} alt="Me" /></div>
                <div id="infoHead">
                    <h1>Hello, I'm Hanad Shippy</h1>
                    <p><b>MAILING ADDRESS:</b> Glendale AZ 85308</p>
                    <p><b>CONTACT INFO:</b> +1 480 717-7686 | hshippy21@gmail.com</p>
                </div>
            </div>

            <div className="Profile">
                <h2>Profile</h2>
                <p>
                    I'm a patient, humble, hard worker who is looking forward to getting a bachelor's degree in
                    CyberSecurity. I have graduated from Deer Valley Highschool with hours of volunteering in a place from
                    Glendale Foothills Library to Food Banks. I have gone to West-MEC for 2 years as a Full Stack Web Developer.
                    I have created a beginning level of the website to professional clean websites.
                </p>
            </div>

            <hr></hr>

            <div className="Education">
                <h2>Education</h2>
                <div className="containEdu">
                    <div>
                        <h3>2018 - 2022</h3>
                        <p>
                            In Deer Valley Highschool I was attending to Baseball: left outfield,
                            Soccer: Forward and Middle; in the first two years. I've also went to other extra
                            extracurricular as Guitar, ASL 1-4 and went to AP Physics without having Chemistry class. 

                        </p>
                    </div>
                    <div id="secEdu">
                        <h3>2020 - 2022</h3>
                        <p>
                            This two-year interactive program from <b>West-MEC</b> prepares students for a career as software developers. 
                            The program teaches student how to design and build website. I've already been in a team that we build a website for the West-MEC student of Veterinarian and Cosmetology.
                            Here for <a href="http://vet-project.herokuapp.com/"><b>Vet science</b></a> and Github of the  <a href="https://github.com/TheCapn-MEC/wmCosmetology"><b>Cosmetology</b></a>
                        </p>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className="Skills">
                <h2>Skills</h2>
                <div className="containSkill">
                    <div>
                        <h3>Soft Skills</h3>
                        <ul>
                            <li>Communications</li>
                            <li>Flexibility</li>
                            <li>Problem Solving</li>
                            <li>Leadership</li>
                            <li>Honesty</li>
                            <li>Time Management</li>
                            <li>Patience</li>
                            <li>Willing to accept feedback</li>
                        </ul>
                    </div>
                    <div id="secSkill">
                        <h3>Hard Skills</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>NodeJS</li>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr></hr>

            <div className="Experience">
                <h2>Experience</h2>
                <p>
                    I have 100 hours of volunteering from Glendale Foothills Library and Saint Mary
                    Food Bank. 2 years of Coding of Web developement and problem solving question in West-MEC
                    Notheast campus with hours of volunteering time with professional training. I have 4 years
                    of Highschool education with taking 2 classes of College of Rio Salado and 2 years of West-MEC.
                </p>
            </div>

            <hr></hr>

            <div className="Award">
                <h2>Certifications</h2>
                <div className="certColumn">
                    <img className="item1" src={DV} alt="Deer"></img>
                    <img className="item2" src={TS} alt="Software"></img>
                    <img className="item3" src={WM} alt="West"></img>
                    <img className="item4" src={TA} alt="Associate"></img>
                </div>
            </div>

            {/* <div className="Award">
                <h2>Certifications</h2>
                <div className="grid1">
                    <img src={DV} alt="Deer"></img>
                    <img src={TS} alt="Software"></img>
                </div>
                <div className="grid2">
                    <img src={WM} alt="West"></img>
                    <img src={TA} alt="Associate"></img>
                </div>
            </div> */}

            {/* <div className="Award">
                <h2>Certifications</h2>

                <div className="imgContain">
                    <div className="imgRow">
                        <img src={DV} alt="Me" id="imgR" />
                        <img src={TS} alt="Me" id="imgS" />
                    </div>
                    <div className="imgRow">
                        <img src={WM} alt="Me" id="imgS" />
                        <img src={TA} alt="Me" id="imgR" />
                    </div>
                </div>
                
            </div> */}

        </div>
    )
}