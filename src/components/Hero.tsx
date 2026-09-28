export function Hero() {
  return (
    <section class="hero-section section-cream">
      <div class="container">
        <div class="hero-grid">
          {/* Hero Typography */}
          <div class="hero-content">
            <span class="micro-label">Fashion Accessories BD</span>
            
            <h1 class="heading-xl">
              Curated<br />
              Adornments.
            </h1>
            
            <p class="body-lead">
              An Elysian Collection of Fashion Accessories. Thoughtfully chosen pieces designed to bring character, elegance, and individuality to everyday style.
            </p>

            <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
              <a 
                href="#" 
                class="btn btn-primary"
                x-on:click="$event.preventDefault(); $store.app.navigate('shop', 'all');"
              >
                Shop The Collection
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>

              <a 
                href="#" 
                class="btn btn-secondary"
                x-on:click="$event.preventDefault(); $store.app.navigate('shop', 'new-arrivals');"
              >
                Explore New Arrivals
              </a>
            </div>
          </div>

          {/* Hero Editorial Photography */}
          <div class="hero-image-wrapper">
            <img 
              src="/images/hero_banner.png" 
              alt="Pocket Candy Luxury Fashion Editorial" 
              class="hero-image" 
            />
            {/* Embedded Logo badge */}
            <img 
              src="/logo-2.png" 
              alt="Pocket Candy Logo" 
              class="hero-logo-floating" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
