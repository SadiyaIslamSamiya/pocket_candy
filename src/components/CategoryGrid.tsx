import { CATEGORIES } from '../data/products';

export function CategoryGrid() {
  return (
    <section class="category-section section-cream-dark">
      <div class="container">
        <div class="section-header-flex">
          <div>
            <span class="micro-label">Discover Collections</span>
            <h2 class="heading-lg" style="color: var(--brand-brown-dark); margin-top: 0.5rem;">
              Shop By Category
            </h2>
          </div>
          <a 
            href="#" 
            class="btn btn-secondary"
            x-on:click="$event.preventDefault(); $store.app.navigate('shop', 'all');"
          >
            View All Categories
          </a>
        </div>

        <div class="category-grid">
          {CATEGORIES.map((cat) => (
            <a 
              href="#" 
              class={`category-card category-card-${cat.gridSpan}`}
              x-on:click={`$event.preventDefault(); $store.app.navigate('shop', '${cat.id}');`}
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                class="category-card-img" 
                loading="lazy"
              />
              <div class="category-card-overlay">
                <span class="category-count">{cat.count} Curated Pieces</span>
                <h3 class="category-title">{cat.name}</h3>
                <span style="font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--gold-light); display: inline-flex; align-items: center; gap: 0.4rem; margin-top: 0.4rem;">
                  Explore Collection
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
