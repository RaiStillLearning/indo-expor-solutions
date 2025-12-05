import React from "react";

const LandingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "80vh",

        // margin-top responsif: kecil di mobile, besar di desktop
        marginTop: "10vh",
      }}
    >
      <h1
        className="text-start"
        style={{
          fontSize: "clamp(28px, 12vw, 120px)",
          lineHeight: "1",
          marginBottom: "0",
        }}
      >
        <b>BRIQUETTE</b>
      </h1>

      <h1
        className="text-start"
        style={{
          fontSize: "clamp(28px, 12vw, 120px)",
          lineHeight: "1",
          marginBottom: "10px",
        }}
      >
        <b>NUSANTARA</b>
      </h1>

      <p
        className="text-start"
        style={{
          fontSize: "clamp(20px, 4vw, 38px)",
          lineHeight: "1.1",
          maxWidth: "800px",
          marginTop: "10px",
        }}
      >
        Premium coconut shell briquettes from Indonesia.
      </p>
    </div>
  );
};

export default LandingPage;
