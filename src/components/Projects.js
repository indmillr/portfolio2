import { Container, Col, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import colorSharp2 from "../assets/img/color-sharp2.png";
import calc from "../assets/img/calc.jpg";
import drums from "../assets/img/drum_machine.jpg";
import hiit from "../assets/img/hiit.jpg";
import md from "../assets/img/markdown.jpg";
import quotes from "../assets/img/quotes.jpg";
import rps from "../assets/img/rps.jpg";
import simon from "../assets/img/simon.jpg";
import todo from "../assets/img/todo.jpg";

export const Projects = () => {
   const projects = [
      {
         title: "Calculator",
         description: "JavaScript Calculator",
         imgUrl: calc,
      },
      {
         title: "Drum Machine",
         description: "An interactive JavaScript Drum Machine",
         imgUrl: drums,
      },
      {
         title: "HIIT Timer",
         description:
            "An adjustable two-timer interface that automatically starts the next timer at the end of the previous timer",
         imgUrl: hiit,
      },
      {
         title: "Markdown Previewer",
         description: "A live split-screen Markdown previewer",
         imgUrl: md,
      },
      {
         title: "Quote Generator",
         description:
            "A machine that randomly generates a quote from a local list of quotes/authors",
         imgUrl: quotes,
      },
      {
         title: "Rock/Paper/Scissors",
         description:
            "An interactive Rock/Paper/Scissors game against a randomized CPU opponent",
         imgUrl: rps,
      },
      {
         title: "Simon",
         description:
            "A rendition of the classic Simon game. Match patterns of colors and sounds to win.",
         imgUrl: simon,
      },
      {
         title: "To-Do List",
         description:
            "An editable to-do list built with Node and Postgres and styled using Bootstrap",
         imgUrl: todo,
      },
   ];

   return (
      <section className="project" id="projects">
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
                     <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                     >
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
      </section>
   );
};
