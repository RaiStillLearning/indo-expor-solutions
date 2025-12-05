import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import VisiMisi from "./landing/about/visi-misi";

export default function App() {
  return (
    <Routes>
      {/* Halaman utama */}
      <Route path="/" element={<Home />} />

      {/* Halaman lain */}
      <Route path="/landing/about/visi-misi" element={<VisiMisi />} />
    </Routes>
  );
}
