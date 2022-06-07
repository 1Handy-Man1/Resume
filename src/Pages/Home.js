import Me from "../Images/me.jpg";
import '../style/main.css';

export default function Home(){
    return(
        <div>
            
            <div className="header">
                <div><img src={Me} alt="Me" /></div>
                <div>
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
                <div className="container">
                    <div>
                        <h4>2018 - 2022</h4>
                        <p>
                            In Deer Valley Highschool I was attending to Baseball: left outfield,
                            Soccer: Forward and Middle; in the first two years. I've also went to other extra
                            extracurricular as Guitar, ASL 1-4 and went to AP Physics without having Chemistry class. 

                        </p>
                    </div>
                    <div id="second">
                        <h4>2020 - 2022</h4>
                        <p>
                            This two-year interactive program from <b>West-MEC</b> prepares students for a career as software developers. 
                            The program teaches student how to design and build website. I've already been in a team that we build a website for the West-MEC student of Veterinarian and Cosmetology.
                            Here for <a href="http://vet-project.herokuapp.com/"><b>Vet science</b></a> and <a href="https://github.com/TheCapn-MEC/wmCosmetology"><b>Github of the Cosmetology</b></a>
                        </p>
                    </div>
                </div>
            </div>

            <hr></hr>

        </div>
    )
}