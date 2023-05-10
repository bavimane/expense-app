import Header from "./Header";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Header />
      <Container style={{ marginTop: "20px" }}>
        <h3>Description</h3>
        <h6>
          It helps to track users spending by category and verify purchases for
          authorized personal purposes.It thoroughly works to maintain user's
          monthly expenses
        </h6>
      </Container>
    </>
  );
};

export default About;
