function ContactSection({ phoneNumber }) {
    
  const googleMapsLink =
    "https://www.google.com/maps/dir/?api=1&destination=Kolhapur%2C%20Maharashtra";
  const whatsappLink =
    "https://wa.me/919561086677?text=Hello%20Aangan%20Caf%C3%A9!%20I%20would%20like%20to%20know%20more.";

  return (
    <section id="contact" className="info-section contact-section">
      <p className="section-label">VISIT AANGAN CAFÉ</p>

      <h2>Come say hello</h2>

      <p className="contact-intro">
        Drop in for comforting chai, a coffee break, and a little Kolhapuri
        apulki.
      </p>

      <div className="contact-details">
        <div className="contact-details">
          <p className="contact-detail-label">Opening Hours</p>
          <p>9:00 AM – 10:30 PM, every day</p>
        </div>

        <div className="contact-detail">
          <p className="contact-detail-label">Phone: </p>
          <a className="contact-phone" href="tel:+919561086677">
            {phoneNumber}
          </a>
        </div>
      </div>

      <div className="contact-actions">
        <a
          className="contact-action direction-button"
          href={googleMapsLink}
          target="_blank"
          rel="noreferrer"
        >
          Get Directions
        </a>

        <a
          className="contact-action contact-whatsapp-button"
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          Message on WhatsApp
        </a>
      </div>
    </section>
  );
}

export default ContactSection;
