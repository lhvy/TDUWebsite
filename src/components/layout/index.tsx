import Footer from "./footer";
import Navigation from "./navigation";

export default function Layout({ children }: any) {
  return (
    <>
      <Navigation />
      <section className="section">
        <div className="container">{children}</div>
      </section>
      <Footer />
    </>
  );
}
