import { Navbar, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../images/logo-left.png";
import "./LeftLogo.scss";

function LeftLogo() {
  return (
    <LinkContainer to="/home">
      <Navbar.Brand>
        <Image src={logo} fluid id="left-logo" alt="logo groupomania"/>
      </Navbar.Brand>
    </LinkContainer>
  );
}

export default LeftLogo;