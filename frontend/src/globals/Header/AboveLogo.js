import { Navbar, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../images/logo-above.png";
import "./AboveLogo.scss";

function AboveLogo() {
  return (
    <LinkContainer to="/home">
      <Navbar.Brand>
        <Image src={logo} fluid id="above-logo" alt="logo groupomania"/>
      </Navbar.Brand>
    </LinkContainer>
  );
}

export default AboveLogo;