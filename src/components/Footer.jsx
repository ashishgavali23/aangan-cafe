function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a className="footer-logo" href="#home">
            Aangan Café
          </a>

          <p>
            A warm corner in Kolhapur for chai, coffee, snacks, and everyday
            conversations.
          </p>
        </div>

        <div className="footer-links">
            <p className="footer-heading">EXPLORE</p>

            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="contact">Visit Us</a>
        </div>

        <div className="footer-links">
            <p className="footer-heading">CONTACT</p>

            <a href="tel:+919561086677">Call: +919561086677</a>

            <a href="https://wa.me/919561086677?text=Hello%20Aangan%20Caf%C3%A9!%20I%20would%20like%20to%20know%20more"
                target="_blank"
                rel="noreferrer"
            >
                Get Directions
            </a>
        </div>
      </div>

      <div className="footer-bottom">
            <p>© {currentYear} Aangan Café. Made with apulki in Kolhapur.</p>
      </div>
    </footer>
  );
}
export default Footer;
