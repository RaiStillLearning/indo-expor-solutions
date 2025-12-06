import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import VisiMisi from "./landing/about/visi-misi";
import Product from "./landing/product/Superiority";
import NotFound from "./NotFound";

export default function App() {
  return (
    <Routes>
      {/* Halaman utama */}
      <Route path="/" element={<Home />} />

      {/* Halaman lain */}
      <Route path="/landing/about/visi-misi" element={<VisiMisi />} />
      <Route path="/landing/product/Superiority" element={<Product />} />
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
