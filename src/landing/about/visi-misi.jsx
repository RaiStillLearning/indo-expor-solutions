import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Layout from "../../components/layout";

export default function VisiMisi() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <Layout>
      {/* ================= CONTACT SECTION ================= */}
      <section id="contact">
        <Container className="my-5">
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Card className="shadow p-4" style={{ borderRadius: "16px" }}>
                <h3 className="text-center mb-4">Contact Us</h3>

                <Form ref={formRef} onSubmit={sendEmail}>
                  {/* Full Name */}
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="from_name"
                      placeholder="Enter your full name"
                      required
                    />
                  </Form.Group>

                  {/* Email */}
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="from_email"
                      placeholder="Enter your email address"
                      required
                    />
                  </Form.Group>

                  {/* Message */}
                  <Form.Group className="mb-3">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Write your message here..."
                      required
                    />
                  </Form.Group>

                  {/* Anti-spam honeypot */}
                  <input
                    type="text"
                    name="website"
                    style={{ display: "none" }}
                  />

                  {/* Button */}
                  <div className="d-grid">
                    <Button
                      type="submit"
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
