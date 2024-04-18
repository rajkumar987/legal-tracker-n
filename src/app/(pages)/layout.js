import Header from "../../components/header";
import Navbar from "../../components/sidenav";

export default function Layout({ children }) {
  return (
    <main>
      <Navbar />
      <Header />
      <section className="md:ml-[18vw] pt-14">{children}</section>
    </main>
  );
}
