const highlights = [
    {
        icon: "☕",
        title: "Freshly Brewed",
        description: "Comforting chai and coffee prepared fresh for every cup.",
    },
    {
        icon:  "🍞",
        title: "Made with Care",
        description: "Simple, satisfying snacks made for every kind of break.",
    },
    {
        icon: "💬",
        title: "Warm Conversations",
        description: "A relaxed corner for friends, work, and everyday gappa.",
    },
];

function CafeHighlights() {
    return (
        <section className="highlights-section" aria-label="Why Visit Aangan Cafe">
            {highlights.map((highlight)=> (
                <article className="highlight-card" key={highlight.title}>
                    <span className="highlight-icon" aria-hidden="true">
                        {highlight.icon}
                    </span>

                    <div>
                        <h2>{highlight.title}</h2>
                        <p>{highlight.description}</p>
                    </div>
                </article>
            ))}
        </section>
    )
}
export default CafeHighlights;