import "./styles.css";
import { Container, Navbar, Row, Image } from "react-bootstrap";
function Header() {
  return (
    <Navbar style={{ backgroundColor: "#ffe082" }} variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Row style={{ alignItems: "center" }}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/en/e/ed/Nobel_Prize.png"
              style={{ height: 50, marginRight: 16 }}
              roundedCircle
            />
            <h2 style={{ color: "#5f4339" }}>The Noble Prize</h2>
          </Row>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
