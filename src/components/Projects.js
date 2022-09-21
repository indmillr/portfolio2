import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
   const projects = [
      {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: projImg1,
      },
      {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: projImg2,
      },
      {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: projImg3,
      },
      {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: projImg1,
      },
      {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: projImg2,
      },
      {
         title: "Business Startup",
         description: "Design & Development",
         imgUrl: projImg3,
      },
   ];

   return (
      <section className="project" id="project">
         <Container>
            <Row>
               <Col size={12}>
                  <h2>Projects</h2>
                  <p>
                     Lorem Ipsum is simply dummy text of the printing and
                     typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it to make a
                     type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                     <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                           <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                     </Nav>
                     <Tab.Content>
                        <Tab.Pane eventKey="first">
                           <Row>
                              {projects.map((project, index) => {
                                 return (
                                    <ProjectCard key={index} {...project} />
                                 );
                              })}
                           </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                     </Tab.Content>
                  </Tab.Container>
               </Col>
            </Row>
         </Container>
         <img className="background-image-right" src={colorSharp2} />
      </section>
   );
};
