import { Card, Row, Col } from "react-bootstrap";
import "./Project.css"
const Projects = () => (
    <div className="ml-3 mt-2 project-div">
        <Card className="projects" style={{ margin:"10px 10px"}}>
            <Row className="project-row">
                <Col xs={4}>Project Name</Col>
                <Col xs={8}>Portfolio</Col>
            </Row>
            <Row className="project-row">
                <Col xs={4}>Technologies</Col>
                <Col xs={8}>React, Spring Boot, Netify, Heroku</Col>
            </Row>
            <Row className="project-row">
                <Col xs={4}>Duration</Col>
                <Col xs={8}>One Month</Col>
            </Row>
        </Card>
        <Card className="projects" style={{ margin:"10px 10px"}}>
            <Row className="project-row">
                <Col xs={4}>Project Name</Col>
                <Col xs={8}>Portfolio</Col>
            </Row>
            <Row className="project-row">
                <Col xs={4}>Technologies</Col>
                <Col xs={8}>React, Spring Boot, Netify, Heroku</Col>
            </Row>
            <Row className="project-row">
                <Col xs={4}>Duration</Col>
                <Col xs={8}>One Month</Col>
            </Row>
        </Card>
        
    </div>

);

export default Projects;