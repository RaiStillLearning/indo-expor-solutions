import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CallToAction = () => {
  return (
    <section
      style={{
        backgroundColor: "#FF0000",
        padding: "60px 0",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h2 className="fw-bold mb-3" style={{ fontSize: "32px" }}>
              Ready for the Best Energy?
            </h2>

            <p className="mb-4" style={{ fontSize: "16px", fontWeight: "500" }}>
              Explore our selection of premium briquettes and experience
              efficiency and sustainability. Let's work together to create a
              greener energy future.
              <br />
              Order now!
            </p>

            <Button
              variant="light"
              style={{
                padding: "10px 30px",
                borderRadius: "8px",
                fontWeight: "600",
                color: "#000",
              }}
            >
              Order Now
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CallToAction;
