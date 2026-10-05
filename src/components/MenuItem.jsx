function MenuItem({ name, price, category, description, image }) {
  return (
    <article className="menu-card">
      <img
        className="menu-image"
        src={image}
        alt={name}
        loading="lazy"
      />

      <div className="menu-card-content">
        <p className="menu-category">{category}</p>
        <h3>{name}</h3>
        <p className="menu-description">{description}</p>
        <p className="menu-price">₹{price}</p>
      </div>
    </article>
  );
}

export default MenuItem;