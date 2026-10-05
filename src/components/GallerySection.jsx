function GallerySection({ images }) {
  return (
    <section className="gallery-section" aria-labelledby="gallery-heading">
      <p className="section-label">THE AANGAN VIBE</p>
      <h2 id="gallery-heading">Made for little breaks and long conversations</h2>

      <div className="gallery-grid">
        {images.map((image) => (
          <figure className="gallery-card" key={image.caption}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />

            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default GallerySection;