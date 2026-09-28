export function AboutPage() {
  return (
    <div class="section-cream" style="padding: 4rem 0 6rem;">
      <div class="container" style="max-width: 1000px;">
        {/* About Hero Header */}
        <div style="text-align: center; margin-bottom: 4rem;">
          <span class="micro-label">The Atelier</span>
          <h1 class="heading-xl" style="color: var(--brand-brown-dark); margin: 0.5rem 0 1.5rem;">
            The World of<br />
            Pocket Candy
          </h1>
          <p class="font-serif" style="font-size: 1.6rem; font-style: italic; color: var(--brand-brown); max-width: 700px; margin: 0 auto;">
            "Fashion accessories, curated with intention."
          </p>
        </div>

        {/* Large Editorial Image */}
        <div style="width: 100%; height: 500px; border-radius: 4px; overflow: hidden; margin-bottom: 5rem; box-shadow: var(--shadow-medium);">
          <img 
            src="/images/campaign_banner.png" 
            alt="Pocket Candy Brand World" 
            style="width: 100%; height: 100%; object-fit: cover;" 
          />
        </div>

        {/* Story & Philosophy Articles */}
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; margin-bottom: 5rem;">
          <div>
            <span class="micro-label" style="margin-bottom: 0.75rem; display: block;">Our Story</span>
            <h2 class="heading-md" style="color: var(--brand-brown-dark); margin-bottom: 1.25rem;">
              Small Details,<br />Unmistakable Presence.
            </h2>
            <p class="body-lead" style="font-size: 0.95rem; margin-bottom: 1.25rem;">
              Pocket Candy was born from a desire to redefine fashion accessories in Bangladesh—creating a space where adornments are not mere afterthoughts, but central expressions of individual character.
            </p>
            <p class="body-lead" style="font-size: 0.95rem;">
              We believe true elegance resides in the interplay of rich tactile materials: soft structured leathers, warm 18k gold tones, natural linen, and silk ribbons.
            </p>
          </div>

          <div>
            <span class="micro-label" style="margin-bottom: 0.75rem; display: block;">Our Philosophy</span>
            <h2 class="heading-md" style="color: var(--brand-brown-dark); margin-bottom: 1.25rem;">
              Curated With Intention.
            </h2>
            <p class="body-lead" style="font-size: 0.95rem; margin-bottom: 1.25rem;">
              Every piece in our boutique is chosen through a rigorous curation process. Rather than following transient micro-trends, we focus on timeless silhouettes, rich earthy brown tones, and distinctive tactile details.
            </p>
            <p class="body-lead" style="font-size: 0.95rem;">
              Whether it's a signature shoulder bag or a subtle pair of drop pearls, each Pocket Candy piece is designed to seamlessly integrate into your daily wardrobe.
            </p>
          </div>
        </div>

        {/* Full Signature Quote Card */}
        <div style="background-color: var(--brand-brown); color: var(--cream-light); padding: 4rem 3rem; border-radius: 4px; text-align: center; margin-bottom: 5rem;">
          <img src="/logo-2.png" alt="Pocket Candy Logo" style="height: 70px; margin-bottom: 1.5rem; border-radius: 4px;" />
          <h3 class="heading-lg" style="color: var(--cream-light); margin-bottom: 1rem;">
            "Little Details. A Lot of Character."
          </h3>
          <p style="font-size: 0.9rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--warm-beige);">
            Fashion Accessories BD
          </p>
        </div>
      </div>
    </div>
  );
}
