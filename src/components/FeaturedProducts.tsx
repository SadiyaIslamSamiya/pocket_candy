import { PRODUCTS } from '../data/products';

export function FeaturedProducts() {
  const favorites = PRODUCTS.filter(p => p.isCuratedFavorite);

  return (
    <section class="products-section section-cream">
      <div class="container">
        <div style="text-align: center; max-width: 650px; margin: 0 auto 3.5rem;">
          <span class="micro-label">Selected Editions</span>
          <h2 class="heading-lg" style="color: var(--brand-brown-dark); margin: 0.5rem 0 1rem;">
            Curated Favorites
          </h2>
          <p class="body-lead" style="font-size: 1rem;">
            Pieces chosen to make everyday style a little more distinctive.
          </p>
        </div>

        <div class="product-grid">
          {favorites.map((product) => (
            <div class="product-card">
              {/* Product Image Container */}
              <div class="product-image-container">
                {product.tag && (
                  <span class="badge-tag" style="position: absolute; top: 1rem; left: 1rem; z-index: 6;">
                    {product.tag}
                  </span>
                )}

                {/* Wishlist Button */}
                <button 
                  class="product-wishlist-btn"
                  x-bind:class={`{ 'active': $store.app.isInWishlist('${product.id}') }`}
                  x-on:click={`$store.app.toggleWishlist($store.app.selectedProduct || ${JSON.stringify(product)})`}
                  aria-label="Save to Wishlist"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>

                <a 
                  href="#" 
                  x-on:click={`$event.preventDefault(); $store.app.navigate('product-detail', '${product.category}', '${product.id}');`}
                >
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    class="product-image-main" 
                    loading="lazy"
                  />
                  {product.images[1] && (
                    <img 
                      src={product.images[1]} 
                      alt={`${product.name} alternate view`} 
                      class="product-image-alt" 
                      loading="lazy"
                    />
                  )}
                </a>

                {/* Quick Action Overlay */}
                <div class="product-actions-overlay">
                  <button 
                    class="btn btn-primary" 
                    style="flex-grow: 1; padding: 0.65rem 1rem; font-size: 0.68rem;"
                    x-on:click={`$store.app.addToCart(${JSON.stringify(product)})`}
                  >
                    Add to Bag
                  </button>
                  <button 
                    class="btn btn-secondary" 
                    style="padding: 0.65rem; background: rgba(247, 241, 229, 0.9);"
                    x-on:click={`$store.app.openQuickView(${JSON.stringify(product)})`}
                    aria-label="Quick View"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div class="product-info">
                <span class="product-category">{product.categoryName}</span>
                <a 
                  href="#" 
                  class="product-title"
                  x-on:click={`$event.preventDefault(); $store.app.navigate('product-detail', '${product.category}', '${product.id}');`}
                >
                  {product.name}
                </a>
                <div class="product-price-row">
                  <span class="product-price">{product.priceFormatted}</span>
                  {product.originalPrice && (
                    <span class="product-price-original">৳ {product.originalPrice.toLocaleString()}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
