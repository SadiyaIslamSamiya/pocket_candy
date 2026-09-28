import { PRODUCTS, CATEGORIES } from '../data/products';

export function ShopPage() {
  return (
    <div class="section-cream" style="padding: 4rem 0 6rem; min-height: 80vh;">
      <div class="container">
        {/* Shop Header */}
        <div style="text-align: center; max-width: 700px; margin: 0 auto 3rem;">
          <span class="micro-label">The Full Collection</span>
          <h1 class="heading-xl" style="color: var(--brand-brown-dark); margin: 0.5rem 0 1rem;">
            Shop All
          </h1>
          <p class="body-lead" style="font-size: 1.05rem;">
            Explore the Pocket Candy collection of curated fashion adornments, handbags, jewelry, and luxury accessories.
          </p>
        </div>

        {/* Filter Bar & Controls */}
        <div 
          x-data="{ 
            filterCategory: $store.app.selectedCategory || 'all',
            searchFilter: '',
            sortBy: 'featured'
          }"
          x-init="$watch('$store.app.selectedCategory', val => filterCategory = val)"
        >
          {/* Top Controls Bar */}
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--warm-beige); border-bottom: 1px solid var(--warm-beige); padding: 1rem 0; margin-bottom: 3rem; flex-wrap: wrap; gap: 1rem;">
            
            {/* Category Pills */}
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; align-items: center;">
              <button 
                class="btn" 
                style="padding: 0.4rem 1rem; font-size: 0.7rem;"
                x-bind:class="filterCategory === 'all' ? 'btn-primary' : 'btn-secondary'"
                x-on:click="filterCategory = 'all'; $store.app.selectedCategory = 'all';"
              >
                All
              </button>
              {CATEGORIES.map(cat => (
                <button 
                  class="btn" 
                  style="padding: 0.4rem 1rem; font-size: 0.7rem;"
                  x-bind:class={`filterCategory === '${cat.id}' ? 'btn-primary' : 'btn-secondary'`}
                  x-on:click={`filterCategory = '${cat.id}'; $store.app.selectedCategory = '${cat.id}';`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Right Search & Sorting */}
            <div style="display: flex; gap: 1rem; align-items: center;">
              {/* Search input */}
              <div style="position: relative; width: 220px;">
                <input 
                  type="text" 
                  placeholder="Filter products..." 
                  x-model="searchFilter"
                  style="width: 100%; padding: 0.45rem 0.8rem 0.45rem 2.2rem; font-size: 0.8rem; border: 1px solid var(--warm-beige); border-radius: 4px; background: #fff;"
                />
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position: absolute; left: 0.75rem; top: 50%; transform: translateY(-50%); color: rgba(45,33,24,0.5);">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>

              {/* Sort Select */}
              <select 
                x-model="sortBy"
                style="padding: 0.45rem 1rem; font-size: 0.8rem; border: 1px solid var(--warm-beige); border-radius: 4px; background: #fff; font-family: var(--font-sans); color: var(--deep-espresso); cursor: pointer;"
              >
                <option value="featured">Sort: Featured</option>
                <option value="newest">Sort: Newest First</option>
                <option value="price-low">Sort: Price (Low to High)</option>
                <option value="price-high">Sort: Price (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div class="product-grid">
            {PRODUCTS.map(product => (
              <div 
                class="product-card"
                x-show={`(filterCategory === 'all' || filterCategory === '${product.category}') && (!searchFilter || '${product.name.toLowerCase()}'.includes(searchFilter.toLowerCase()))`}
              >
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
      </div>
    </div>
  );
}
