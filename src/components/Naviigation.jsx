function Navigation ({ isMenuOpen, onMenuToggle, onLinkClick}) {
    return(
        <nav className="site-navigation">
            <a className="brand-name" href="#home">
                Aangan Café
            </a>
            <button
             className="menu-toggle"
             type="button"
             aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
             aria-expanded={isMenuOpen}
             aria-controls="main-navigation-links"
             onClick={onMenuToggle}
            >
                {isMenuOpen ? "✕" : "☰"}
            </button>

            <div 
                id="main-navigation-links"
                className={`navigation-links ${isMenuOpen ? "is-open" : ""}`}
            >

                <a href="#home" onClick={onLinkClick}>
                    Home
                </a>
                <a href="#menu" onClick={onLinkClick}>
                    Menu
                </a>
                <a href="#about" onClick={onLinkClick}>
                    About
                </a>
                <a href="#contact" onClick={onLinkClick}>
                    Visit Us
                </a>

            </div>
        </nav>
    )
}

export default Navigation;