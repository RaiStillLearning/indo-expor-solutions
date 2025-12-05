import React, { useState } from "react";
import { Carousel, Card, Button } from "react-bootstrap";

const CertificateCarousel = () => {
  const [index, setIndex] = useState(0);

  const certificates = [
    {
      id: 1,
      image: "/certificate/dummy-photo.jpg",
      title: "CERTIFICATION",
      company: "PT. GUDANG GARAM Tbk.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      image: "/certificate/dummy-photo.jpg",
      title: "CERTIFICATION",
      company: "PT. GUDANG GARAM Tbk.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      image: "/certificate/dummy-photo.jpg",
      title: "CERTIFICATION",
      company: "PT. GUDANG GARAM Tbk.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const cardOverlayStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "55%",
    background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  };

  const cardStyle = {
    borderRadius: "20px",
    overflow: "hidden",
    height: "320px",
    position: "relative",
  };

  return (
    <>
      <Carousel
        indicators={false}
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
      >
        {certificates.map((cert) => (
          <Carousel.Item key={cert.id}>
            <Card
              className="shadow-lg border-0 text-white"
              style={{
                ...cardStyle,
                backgroundImage: `url(${cert.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div style={cardOverlayStyle}>
                <h4 className="fw-bold mb-2">{cert.title}</h4>
                <h5 className="fw-bold mb-2">{cert.company}</h5>
                <p
                  className="mb-3"
                  style={{ fontSize: "14px", maxWidth: "550px" }}
                >
                  {cert.description}
                </p>
                <Button
                  variant="dark"
                  size="sm"
                  className="rounded-3"
                  style={{ width: "fit-content", padding: "6px 15px" }}
                >
                  View Certification
                </Button>
              </div>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom Indicators */}
      <div className="d-flex justify-content-center gap-2 mt-3">
        {certificates.map((cert, i) => (
          <div
            key={cert.id}
            role="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: i === index ? "#000" : "#ccc",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CertificateCarousel;
