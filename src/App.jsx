import { useState } from "react";
import "./App.css";
import MenuItem from "./components/MenuItem";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Navigation from "./components/Naviigation";
import CafeHighlights from "./components/CafeHighlights";
import Footer from "./components/Footer";
import heroCafeImage from "./assets/images/hero-cafe.webp";
import masalaChaiImage from "./assets/images/masala-chai.webp";
import coffeeImage from "./assets/images/cold-coffee.webp";
import snacksImage from "./assets/images/snacks.webp";
import GallerySection from "./components/GallerySection";
import cafeCornerImage from "./assets/images/cafe-corner.webp";
import friendsTableImage from "./assets/images/friends-table.webp";
import coffeeMomentImage from "./assets/images/coffee-moment.webp";

const cafeName = "Aangan Café";
const tagline = "Apulki in every sip.";
const city = "Kolhapur";
const phoneNumber = "+91 95610 86677";
const whatsappNumber = "919561086677";

const menuItems = [
  {
    id: 1,
    name: "Masala Chai",
    price: 20,
    category: "Chai",
    description: "A comforting cup of spiced Indian tea.",
    image: masalaChaiImage,
  },
  {
    id: 2,
    name: "Hot Coffee",
    price: 50,
    category: "Coffee",
    description: "Rich, warm coffee for a relaxed break.",
    image: coffeeImage,
  },
  {
    id: 3,
    name: "Cold Coffee",
    price: 80,
    category: "Coffee",
    description: "Creamy, chilled coffee served fresh.",
    image: coffeeImage,
  },
  {
    id: 4,
    name: "Veg Sandwich",
    price: 70,
    category: "Snacks",
    description: "A freshly made vegetable sandwich.",
    image: snacksImage,
  },
  {
    id: 5,
    name: "French Fries",
    price: 120,
    category: "Snacks",
    description: "Toasted garlic bread with melted cheese.",
    image: snacksImage,
  },
  {
    id: 6,
    name: "Chocolate Brownie",
    price: 90,
    category: "Desserts",
    description: "A rich chocolate brownie for a sweet finish.",
    image: coffeeImage,
  },
];

const categories = ["All", "Chai", "Coffee", "Snacks", "Desserts"];

const galleryImages = [
  {
    src: cafeCornerImage,
    alt: "A warm and inviting corner inside Aangan Café",
    caption: "A little corner to slow down",
  },
  {
    src: friendsTableImage,
    alt: "Friends sharing food and conversation at a café table",
    caption: "Good food, better gappa",
  },
  {
    src: coffeeMomentImage,
    alt: "A freshly prepared coffee on a cosy café table",
    caption: "Your everyday coffee moment",
  },
];

function CafeHeader({ name }) {
  return <h1>{name}</h1>;
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hello Aangan Café! I would like to know more about your menu.",
  );

  const visibleMenuItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  function toggleNavigation() {
    setIsMenuOpen((currentValue) => !currentValue);
  }

  function closeNavigation() {
    setIsMenuOpen(false);
  }

  return (
    <div>
      <Navigation
        isMenuOpen={isMenuOpen}
        onMenuToggle={toggleNavigation}
        onLinkClick={closeNavigation}
      />
      <header
        id="home"
        className="cafe-header"
        style={{ backgroundImage: `url(${heroCafeImage})` }}
      >
        <p className="hero-label">KOLHAPURI WARMTH, EVERY DAY</p>

        <CafeHeader name={cafeName} />

        <p className="hero-tagline">{tagline}</p>

        <p className="hero-location">
          Fresh coffee, comforting food, and warm conversations in {city}.
        </p>

        <div className="hero-actions">
          <a className="hero-button call-button" href="tel:+919561086677">
            Call Us
          </a>

          <a
            className="hero-button whatsapp-button"
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            Order on WhatsApp
          </a>
        </div>

        <a className="menu-link" href="#menu">
          Explore our menu ↓
        </a>
      </header>

      <main>
        <CafeHighlights />
        <section id="menu" className="menu-section">
          <p className="section-label">Freshly Made</p>
          <h2>Our Menu</h2>

          <div className="menu-tabs" aria-label="Menu categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`menu-tab ${selectedCategory === category ? "active" : ""}`}
                type="button"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="menu-list">
            {visibleMenuItems.map((item) => (
              <MenuItem
                key={item.id}
                name={item.name}
                price={item.price}
                category={item.category}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </section>

        <AboutSection />

        <GallerySection images={galleryImages} />

        <ContactSection phoneNumber={phoneNumber} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
