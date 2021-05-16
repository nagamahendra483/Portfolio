import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import * as homePageData from "../data/homePage.json";
import { Nav, NavLink } from 'react-bootstrap';
import logo from "../images/image.jpg";
import "./HomePage.css"

const HomePage = () => {
    return (
        <div>
            <div className="homepageDiv" style={{ textAlign: "center", padding:"2px 2px"}}>
                <img src={logo} alt="Image Not Found" style={{ width: "15%", height: "15%",borderRadius: "50%" }}></img>
                <h3>{homePageData.name}</h3>
                <h5>{homePageData.role}</h5>
                <div><span>Skills: </span>{homePageData.skills.join(", ")}</div>
                <div>
                    <Nav className="justify-content-center">
                        <NavLink href={homePageData.githuburl} target="_blank"><FaGithub></FaGithub></NavLink>
                        <NavLink href={homePageData.linkedinurl} target="_blank"><FaLinkedin></FaLinkedin></NavLink>
                        <NavLink href={homePageData.twittwerurl} target="_blank"><FaTwitter></FaTwitter></NavLink>
                        <NavLink href={homePageData.instaurl} target="_blank"><FaInstagram></FaInstagram></NavLink>
                    </Nav>
                </div>
            </div>
        </div>
    );
}

export default HomePage;