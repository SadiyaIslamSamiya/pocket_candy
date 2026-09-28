export function BrandIntro() {
  return (
    <section class="brand-intro-section section-warm-beige">
      <div class="container">
        <div class="brand-intro-grid">
          {/* Editorial Column */}
          <div>
            <span class="micro-label" style="margin-bottom: 1rem; display: block;">Our Identity</span>
            <h2 class="heading-lg" style="margin-bottom: 1.8rem; color: var(--brand-brown-dark);">
              Distinctive Pieces,<br />
              Curated for You.
            </h2>
            <p class="body-lead" style="margin-bottom: 2rem;">
              Thoughtfully selected accessories designed to bring character, elegance and individuality to everyday style. Each item in the Pocket Candy collection is chosen with intention—balancing tactile luxury with lasting versatility.
            </p>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; border-top: 1px solid var(--warm-beige); padding-top: 2rem;">
              <div>
                <h4 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--brand-brown); margin-bottom: 0.4rem;">
                  Artisanal Intent
                </h4>
                <p style="font-size: 0.88rem; color: rgba(45,33,24,0.75);">
                  Rich textures, supple leathers, and 18k gold details designed for longevity.
                </p>
              </div>

              <div>
                <h4 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--brand-brown); margin-bottom: 0.4rem;">
                  Personal Character
                </h4>
                <p style="font-size: 0.88rem; color: rgba(45,33,24,0.75);">
                  Statement accents that speak softly yet make an indelible impression.
                </p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div class="intro-image-frame">
            <img 
              src="/images/intro_editorial.png" 
              alt="Pocket Candy Accessories Editorial" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
