import { Container, Row, Col } from "react-bootstrap";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top w-100">
      <Container>
        <Row className="w-100 align-items-center">
          <Col xs="auto">
            <img src="/GB.svg" alt="logo" width="30" height="24" />
          </Col>
          <Col className="d-flex justify-content-end gap-3">
            <a
              title="G-mail"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bellucogabriele0@gmail.com&su=Richiesta%20di%20Assunzione&body=Ciao%20Gabriele%20ho%20visto%20il%20tuo%20sito%20e%20vorrei%20contattarti%20per%20maggiori%20informazioni"
              target="_blank"
              className="btn btn-dark "
            >
              <i className="bi bi-envelope-at"></i>
            </a>
            <a
              title="Linkedin"
              href="https://www.linkedin.com/in/gabriele-belluco-bba15739b/"
              target="_blank"
              className="btn btn-dark "
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              title="Github"
              href="https://github.com/bellucogabriele0-create"
              target="_blank"
              className="btn btn-dark "
            >
              <i className="bi bi-github"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}
export default Nav;
