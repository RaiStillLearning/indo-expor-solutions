import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Layout from "../../components/layout";

export default function VisiMisi() {
  return (
    <Layout>
      <section className="mt-5 py-4" id="about">
        <Container>

          {/* ABOUT TEXT */}
          <Row className="justify-content-center text-center">
            <Col md={8} lg={6}>
              <h2 className="mb-4">About Briquette Nusantara</h2>

              <p className="text-muted">
                Briquette Nusantara is a pioneer in environmentally friendly briquette production in Indonesia.
                Established in 2010 with the vision of providing clean, sustainable, and high-efficiency energy
                alternatives, we have grown into a trusted name across industries nationwide. Our strong foundation
                is built on consistent innovation, rigorous quality control, and a deep commitment to preserving 
                the environment.
              </p>

              <p className="text-muted">
                Over the years, Briquette Nusantara has developed advanced production methods using carefully 
                selected renewable materials. Our briquettes are designed to produce high heat output, low emissions, 
                and long-lasting burn duration—qualities that make them suitable for industrial use, culinary needs, 
                and household applications. With continuous technological improvements, we ensure our products meet 
                both domestic and international standards.
              </p>

              <p className="text-muted">
                Today, we serve a wide range of clients, from restaurants and hotels to factories that require 
                reliable, affordable, and eco-friendly energy sources. Our operations emphasize sustainability at 
                every stage—starting from material selection, production efficiency, packaging, distribution, and 
                waste management. This holistic approach reflects our belief that economic progress must go hand 
                in hand with environmental responsibility.
              </p>

              <p className="text-muted">
                We remain committed to creating a cleaner future by reducing dependency on fossil fuels and promoting 
                renewable alternatives. Briquette Nusantara continues to innovate and expand, driven by the mission to
                support communities and industries with sustainable energy solutions that have lasting positive impact.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="visimisi">
        <h1 className="text-center mt-5">Vision And Mission</h1>
        <Container className="my-5 m-auto">

      <div className="d-flex flex-wrap gap-4 justify-content-center">

        {/* BOX 1 */}
        <Card className="shadow-sm text-center p-3" style={{ width: "280px" }}>
          <Card.Body>
            <h5 className="mb-3">Vision</h5>
            <p className="text-muted">
              To be a global leader in the briquette industry, recognized for product excellence, operational sustainability, and positive impact on the local economy and environment.
            </p>
          </Card.Body>
        </Card>

        {/* BOX 2 */}
        <Card className="shadow-sm text-center p-3" style={{ width: "280px" }}>
          <Card.Body>
            <h5 className="mb-3">Mission</h5>
            <p className="text-muted">
            Providing innovative and affordable high-quality briquette products, empowering communities with clean energy, and contributing to environmental conservation through sustainable and responsible production practices.
            </p>
          </Card.Body>
        </Card>
      </div>
    </Container>
      </section>
      <section id="ourteam">
  <Container className="mt-5">

    {/* Title */}
    <Row className="justify-content-center text-center">
      <Col md={8} lg={6}>
        <h2 className="mb-4">Our Team</h2>
        <p className="text-muted">
          Meet the experienced professionals driving Briquette Nusantara forward.
        </p>
      </Col>
    </Row>

    {/* PROFILE CARDS */}
    <Row className="justify-content-center g-5 mt-4">

      {/* === TEAM MEMBER 1 === */}
      <Col md={5} className="d-flex flex-column align-items-center">

        <Card
          style={{
            width: "260px",
            borderRadius: "16px",
            overflow: "hidden",
            border: "none",
          }}
          className="shadow"
        >
          <div style={{ position: "relative" }}>
            <img
              src="/team/dummy-people.jpg"
              alt="ASEP SAIFULLOH"
              style={{
                width: "100%",
                height: "330px",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />

            {/* Gradient */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "45%",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
                borderRadius: "16px",
              }}
            ></div>

            {/* Text on bottom */}
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                width: "100%",
                textAlign: "center",
                color: "white",
              }}
            >
              <h5 style={{ fontWeight: 700, marginBottom: 0 }}>
                ASEP SAIFULLOH
              </h5>
              <p style={{ marginTop: "-2px", fontSize: "14px" }}>
                Chief Executive Officer
              </p>
            </div>
          </div>
        </Card>

        {/* EDUCATION */}
        <h4 className="mt-4 fw-bold">Education</h4>
        <ul style={{ textAlign: "left", maxWidth: "360px" }}>
          <li>Ph.D. in Chemical Engineering, ITB</li>
          <li>M.Sc. in Business Management, UI</li>
        </ul>

        {/* CAREER */}
        <h4 className="mt-3 fw-bold">Career</h4>
        <ul style={{ textAlign: "left", maxWidth: "360px" }}>
          <li>20+ years of experience in renewable energy</li>
          <li>20+ years of experience in renewable energy</li>
          <li>20+ years of experience in renewable energy</li>
        </ul>
      </Col>

      {/* === TEAM MEMBER 2 === */}
      <Col md={5} className="d-flex flex-column align-items-center">

        <Card
          style={{
            width: "260px",
            borderRadius: "16px",
            overflow: "hidden",
            border: "none",
          }}
          className="shadow"
        >
          <div style={{ position: "relative" }}>
            <img
              src="/team/dummy-people.jpg"
              alt="ASEP SAIFULLOH"
              style={{
                width: "100%",
                height: "330px",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />

            {/* Gradient */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "45%",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
                borderRadius: "16px",
              }}
            ></div>

            {/* Text on bottom */}
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                width: "100%",
                textAlign: "center",
                color: "white",
              }}
            >
              <h5 style={{ fontWeight: 700, marginBottom: 0 }}>
                ASEP SAIFULLOH
              </h5>
              <p style={{ marginTop: "-2px", fontSize: "14px" }}>
                Chief Executive Officer
              </p>
            </div>
          </div>
        </Card>

        {/* EDUCATION */}
        <h4 className="mt-4 fw-bold">Education</h4>
        <ul style={{ textAlign: "left", maxWidth: "360px" }}>
          <li>Ph.D. in Chemical Engineering, ITB</li>
          <li>M.Sc. in Business Management, UI</li>
        </ul>

        {/* ACHIEVEMENT */}
        <h4 className="mt-3 fw-bold">Achievement</h4>
        <ul style={{ textAlign: "left", maxWidth: "360px" }}>
          <li>20+ years of experience in renewable energy</li>
          <li>20+ years of experience in renewable energy</li>
          <li>20+ years of experience in renewable energy</li>
        </ul>
      </Col>
    </Row>
  </Container>
</section>
<section id="contact">
  <Container className="my-5">
    <Row className="justify-content-center">
      <Col md={8} lg={6}>
        <Card className="shadow p-4" style={{ borderRadius: "16px" }}>

          <h3 className="text-center mb-4">Contact Us</h3>

          <Form>

            {/* Full Name */}
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your full name" 
              />
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter your email address" 
              />
            </Form.Group>

            {/* Message */}
            <Form.Group className="mb-3">
              <Form.Label>Your Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={5} 
                placeholder="Write your message here..." 
              />
            </Form.Group>

            {/* Button */}
            <div className="d-grid">
              <Button 
                variant="dark" 
                size="lg" 
                style={{ borderRadius: "10px" }}
              >
                Send Message
              </Button>
            </div>

          </Form>

        </Card>
      </Col>
    </Row>
  </Container>
</section>
    </Layout>
  );
}
