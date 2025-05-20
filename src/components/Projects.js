import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here’s a glimpse of my work—each project reflects my passion for clean code, intuitive design, and impactful solutions. From responsive web apps to interactive interfaces, I build with precision and purpose.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        <Col md={6}>
                          <div className="proj-imgbx">
                            <img src={'./proj1.PNG'} alt="Dream Tax Academy" />
                            <div className="proj-txtx">
                              <h4>DREAM TAX ACADEMY</h4>
                              <span style={{
                                display: 'block',
                                wordWrap: 'break-word',
                                whiteSpace: 'pre-line',
                                width: '80%',
                                alignSelf: 'center',
                                margin: '0 auto',
                                marginBottom: '2rem'
                              }}>
                                It's provide high quality training in Tax and Revenue Administration through Taxation Technical Course, Tax workshops and seminars, sharpening tax awareness to the taxpayers.
                              </span>
                              <button className="vvd">
                                <span>
                                  <a
                                    href="https://dta.rw/"
                                    style={{
                                      textDecoration: 'none',
                                      color: 'white',
                                      padding: '10px',
                                      background: 'transparent',
                                      border: '1px solid #fff',
                                      borderRadius: '30px',
                                      marginTop: '5rem'
                                    }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Visit Website
                                  </a>
                                </span>
                              </button>
                            </div>
                          </div>
                        </Col>
                         <Col md={6}>
                          <div className="proj-imgbx">
                            <img src={'./proj2.PNG'} alt="Dream Tax Academy" />
                            <div className="proj-txtx">
                              <h4>INCUTI ORGANIZATION</h4>
                              <span style={{
                                display: 'block',
                                wordWrap: 'break-word',
                                whiteSpace: 'pre-line',
                                width: '80%',
                                alignSelf: 'center',
                                margin: '0 auto',
                                marginBottom: '2rem'
                              }}>
                                Short description for project 2 goes here. You can update this with your actual project details.
                              </span>
                              <button className="vvd">
                                <span>
                                  <a
                                    href="https://inshuti2002.org/"
                                    style={{
                                      textDecoration: 'none',
                                      color: 'white',
                                      padding: '10px',
                                      background: 'transparent',
                                      border: '1px solid #fff',
                                      borderRadius: '30px',
                                      marginTop: '5rem'
                                    }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Visit Website
                                  </a>
                                </span>
                              </button>
                            </div>
                          </div>
                        </Col>
                  
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
