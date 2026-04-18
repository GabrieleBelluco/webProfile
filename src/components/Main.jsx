import { Container, Row, Col } from "react-bootstrap";
import { calculateAge } from "../utils/date";

function Main() {
  return (
    <Container className="py-3 py-md-5">
      <Row className="align-items-center g-4">
        <Col xs={12} md={4} className="text-center">
          <img
            src="../public/img/fotoProfilo.jpeg"
            alt="Foto del proprietario del sito"
            className="img-fluid rounded rounded-5 shadow w-75"
          />
        </Col>

        <Col xs={12} md={8}>
          <div className="bg-dark bg-opacity-75 text-light p-3 p-md-4 rounded shadow">
            <h2 className="mb-3">
              Ciao 👋🏻, se sei qui probabilmente vuoi sapere di più su di me
            </h2>

            <p className="text-light opacity-75">
              Sono Gabriele Belluco, ho {calculateAge("2001-08-09")} anni, nato
              a Cagliari. Diplomato presso un istituto alberghiero nel luglio
              2022, ho maturato esperienze lavorative in diversi settori tra
              Torino e Frankfurt am Main.
            </p>

            <p className="text-light opacity-75">
              Dopo questi percorsi ho deciso di investire su me stesso,
              iniziando a studiare programmazione web.
            </p>

            <p className="fw-semibold mt-3">
              Competenze: HTML · CSS · JavaScript · Bootstrap · React · Java ·
              Spring
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
