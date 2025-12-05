import React from "react";

import Layout from "../../components/layout";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Leaf, Zap, Check } from "lucide-react";

const Superiority = () => {
  return (
    <Layout>
      <section id="superiority" className="py-5">
        <Container>
          {/* TITLE */}
          <Row className="justify-content-center text-center">
            <Col md={8} lg={6}>
              <h2 className="mb-4">Why Choose Our Briquette?</h2>
              <p className="text-muted">
                BriquetteNusantara briquettes offer superior renewable energy
                solutions, designed for efficiency, sustainability, and optimal
                performance in every application.
              </p>
            </Col>
          </Row>

          {/* FLEX BOX SECTION */}
          <div className="d-flex flex-wrap gap-4 justify-content-center mt-5">
            {/* BOX 1 */}
            <Card
              className="shadow-sm text-center p-4"
              style={{ width: "280px" }}
            >
              {/* ICON CENTER */}
              <div className="d-flex justify-content-center mb-3">
                <Leaf style={{ width: "50px", height: "50px" }} />
              </div>

              <h5 className="mb-3">Clean Energy</h5>

              <p className="text-muted">
                Our briquettes produce clean burning with low emissions, keeping
                the environment healthy.
              </p>
            </Card>
            <Card
              className="shadow-sm text-center p-4"
              style={{ width: "280px" }}
            >
              {/* ICON CENTER */}
              <div className="d-flex justify-content-center mb-3">
                <Zap style={{ width: "50px", height: "50px" }} />
              </div>

              <h5 className="mb-3">High Efficiency</h5>

              <p className="text-muted">
                Enjoy longer burning duration and consistent heat, saving you
                energy costs.
              </p>
            </Card>
            <Card
              className="shadow-sm text-center p-4"
              style={{ width: "280px" }}
            >
              {/* ICON CENTER */}
              <div className="d-flex justify-content-center mb-3">
                <Check style={{ width: "50px", height: "50px" }} />
              </div>

              <h5 className="mb-3">Environmentally Friendly</h5>

              <p className="text-muted">
                Made from renewable raw materials, our briquettes are a
                responsible choice for the planet.
              </p>
            </Card>
          </div>
        </Container>
        {/* PRODUCT BOXES */}
        <div className="d-flex flex-wrap gap-4 justify-content-center mt-5">
          {/* PRODUCT 1 */}
          <Card
            className="shadow-sm text-center p-3"
            style={{ width: "280px", borderRadius: "16px" }}
          >
            {/* IMAGE */}
            <img
              src="/certificate/dummy-photo.jpg"
              alt="Coconut Briquette"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            <h5 className="mt-3 mb-2 fw-bold">Coconut Briquette</h5>

            <p className="text-muted" style={{ fontSize: "14px" }}>
              Premium coconut shell briquettes with clean burn and long-lasting
              heat.
            </p>

            <Button
              variant="dark"
              className="mt-auto w-100"
              style={{ borderRadius: "10px" }}
            >
              Learn More
            </Button>
          </Card>

          {/* PRODUCT 2 */}
          <Card
            className="shadow-sm text-center p-3"
            style={{ width: "280px", borderRadius: "16px" }}
          >
            <img
              src="/certificate/dummy-photo.jpg"
              alt="Sawdust Briquette"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            <h5 className="mt-3 mb-2 fw-bold">Sawdust Briquette</h5>

            <p className="text-muted" style={{ fontSize: "14px" }}>
              A reliable and affordable briquette suitable for daily household
              use.
            </p>

            <Button
              variant="dark"
              className="mt-auto w-100"
              style={{ borderRadius: "10px" }}
            >
              Learn More
            </Button>
          </Card>

          {/* PRODUCT 3 */}
          <Card
            className="shadow-sm text-center p-3"
            style={{ width: "280px", borderRadius: "16px" }}
          >
            <img
              src="/certificate/dummy-photo.jpg"
              alt="Hexagonal Briquette"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            <h5 className="mt-3 mb-2 fw-bold">Hexagonal Briquette</h5>

            <p className="text-muted" style={{ fontSize: "14px" }}>
              Strong structure, high heat output, and perfect for industrial
              usage.
            </p>

            <Button
              variant="dark"
              className="mt-auto w-100"
              style={{ borderRadius: "10px" }}
            >
              Learn More
            </Button>
          </Card>

          {/* PRODUCT 4 */}
          <Card
            className="shadow-sm text-center p-3"
            style={{ width: "280px", borderRadius: "16px" }}
          >
            <img
              src="/certificate/dummy-photo.jpg"
              alt="Shisha Briquette"
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            <h5 className="mt-3 mb-2 fw-bold">Shisha Briquette</h5>

            <p className="text-muted" style={{ fontSize: "14px" }}>
              High-quality shisha briquettes with low ash and consistent heat.
            </p>

            <Button
              variant="dark"
              className="mt-auto w-100"
              style={{ borderRadius: "10px" }}
            >
              Learn More
            </Button>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Superiority;
