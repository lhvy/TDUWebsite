import SocialButtons from "../socialButtons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div
          className="columns"
          style={{
            textAlign: "center",
          }}
        >
          <div className="column">
            <h1 className="subtitle">Social Media</h1>
            <SocialButtons />
            <hr className="divider" />
            <a className="button is-primary" href="/contact">
              Contact Us!
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
