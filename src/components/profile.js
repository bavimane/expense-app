import Container from "react-bootstrap/Container";

import Header from "./Header";

const Profile = () => {
  return (
    <>
      <Header />

      <Container style={{ marginTop: "20px" }}>
        <h3>Profile info</h3>
      </Container>
    </>
  );
};

export default Profile;
