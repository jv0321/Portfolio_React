
import { Container, Row, Col, Button } from 'react-bootstrap';

function About() {
    return (
        <div className="about-me">
            <Container>
                <h1 className="text-center my-5">A Little About Myself</h1>
                <Row className=" mb-5">
                    <Col lg={9}>
                        <div className="content">
                            <h2>Hi, I'm Juan</h2>
                            <p>
                                I'm Juan Vargas, a passionate full-stack web developer committed to creating visually stunning and highly functional websites. My experience in web development has given me a broad range of skills and a deep motivation to provide outstanding user experiences.
                            </p>
                            <p>
                                Skilled in front-end technologies like React, HTML, CSS, and JavaScript, as well as back-end technologies such as Node.js, Express, and databases like MongoDB, I am committed to staying updated with emerging technologies and industry trends.
                            </p>
                            <p>
                                My enthusiasm for problem-solving and ongoing learning drives my ambition to excel as a versatile full-stack developer, eager to contribute to innovative projects. I am currently seeking opportunities to further apply my expertise and make a significant impact in web development.
                            </p>
                          
                            <Row className="skills-section mt-5">
                                <Col>
                                    <h1>Skills</h1>
                                    <Row>
                                        <Col md={6}>
                                            <h3>Front End Technologies</h3>
                                            <ul>
                                                <li>HTML</li>
                                                <li>CSS/SCSS</li>
                                                <li>JavaScript</li>
                                                <li>React</li>
                                                <li>TailwindCSS</li>
                                            </ul>
                                        </Col>
                                        <Col md={6}>
                                            <h3>Back End Technologies</h3>
                                            <Row>
                                                <Col md={6}>
                                                    <ul>
                                                        <li>Node.js</li>
                                                        <li>Express.js</li>
                                                        <li>SQL</li>
                                                        <li>PostgresSQL</li>

                                                    </ul>
                                                </Col>
                                                <Col md={6}>
                                                    <ul>
                                                        <li>Sequelize</li>
                                                        <li>MongoDB</li>
                                                        <li>Mongoose</li>
                                                        <li>GraphQL</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>


            </Container>
        </div>
    );
}

export default About;