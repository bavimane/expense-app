import { asyncViewProfile } from "../actions/ProfileAction";
import Header from "./Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";

const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.userProfile;
  });

  useEffect(() => {
    dispatch(asyncViewProfile());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Container style={{ marginTop: "20px" }}>
        <h3>View Profile</h3>
        <h6>Name - {user.name}</h6>
        <h6>Email - {user.email}</h6>
      </Container>
    </>
  );
};

export default Profile;
