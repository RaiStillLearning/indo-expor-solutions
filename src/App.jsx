import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "./components/layout";
import LandingPage from "./landing/LandingPage";
import CertificateCarousel from "./components/CertificateCarousel";
import CallToAction from "./components/CallToAction";

const Home = () => {
  return (
    <div>
      {/* Landing Section */}
      <section style={{ backgroundColor: "#FFF5EE" }}>
        <Layout>
          <LandingPage />
        </Layout>
      </section>

      {/* About Us Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} className="text-center">
              <h2 className="mb-4">About Our Company</h2>
              <p className="text-muted">
                We are a leading briquette manufacturer dedicated to sustainable
                energy innovation. Using modern technology and selected raw
                materials, we produce export-quality briquettes that are
                efficient, clean, and environmentally friendly. We believe in
                responsible energy for a brighter future, supporting industries
                and homes with superior heating solutions.
              </p>
            </Col>
          </Row>

          {/* Official Documents */}
          <Row className="justify-content-center mt-5">
            <Col md={8} lg={6} className="text-center">
              <h2 className="mb-4">Official Documents</h2>
              <p className="text-muted">
                Briquettenusantara is committed to operating with transparency
                and integrity. This section provides comprehensive information
                regarding our licenses, certificates, legality, and compliance
                with applicable industry standards and regulations.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Certificates Carousel Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <CertificateCarousel />
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <CallToAction />
      </section>
    </div>
  );
};

export default Home;
