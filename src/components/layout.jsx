import AppNavbar from "./navigation";

export default function Layout({ children }) {
  return (
    <div>
      <AppNavbar />
      <main style={{ padding: "20px" }}>{children}</main>
    </div>
  );
}
