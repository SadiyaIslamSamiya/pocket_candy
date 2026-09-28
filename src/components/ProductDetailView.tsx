import { PRODUCTS } from '../data/products';

export function ProductDetailView() {
  return (
    <div class="section-cream" style="padding: 3rem 0 6rem;" x-data="{ openAccordion: 'details' }">
      <div class="container">
        {/* Breadcrumb */}
        <div style="font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(45,33,24,0.6); margin-bottom: 2rem; display: flex; gap: 0.5rem; align-items: center;">
          <a href="#" x-on:click="$event.preventDefault(); $store.app.navigate('home');" style="color: inherit; text-decoration: none;">Home</a>
          <span>/</span>
          <a href="#" x-on:click="$event.preventDefault(); $store.app.navigate('shop', $store.app.selectedProduct.category);" style="color: inherit; text-decoration: none;" x-text="$store.app.selectedProduct.categoryName"></a>
          <span>/</span>
          <span style="color: var(--brand-brown);" x-text="$store.app.selectedProduct.name"></span>
        </div>

        {/* Product Detail Grid */}
        <div class="product-detail-grid">
          {/* LEFT: Image Gallery */}
          <div class="detail-gallery">
            {/* Thumbnails */}
            <div class="detail-thumbnails">
              <template x-for="(img, idx) in $store.app.selectedProduct.images">
                <img 
                  x-bind:src="img" 
                  x-bind:alt="$store.app.selectedProduct.name"
                  class="detail-thumb"
                  x-bind:class="{ 'active': $store.app.activeDetailImageIndex === idx }"
                  x-on:click="$store.app.activeDetailImageIndex = idx"
                />
              </template>
            </div>

            {/* Main Image View */}
            <div style="flex-grow: 1; position: relative;">
              <img 
                x-bind:src="$store.app.selectedProduct.images[$store.app.activeDetailImageIndex] || $store.app.selectedProduct.images[0]" 
                x-bind:alt="$store.app.selectedProduct.name"
                class="detail-main-img"
              />
              <template x-if="$store.app.selectedProduct.tag">
                <span class="badge-tag" style="position: absolute; top: 1.5rem; left: 1.5rem;" x-text="$store.app.selectedProduct.tag"></span>
              </template>
            </div>
          </div>

          {/* RIGHT: Product Details & Buying Actions */}
          <div style="display: flex; flex-direction: column;">
            <span class="micro-label" x-text="$store.app.selectedProduct.categoryName"></span>
            
            <h1 class="heading-lg" style="color: var(--brand-brown-dark); margin: 0.5rem 0 1rem;" x-text="$store.app.selectedProduct.name"></h1>
            
            {/* Price Row */}
            <div style="display: flex; align-items: baseline; gap: 1rem; margin-bottom: 1.5rem;">
              <span class="heading-md" style="color: var(--brand-brown); font-weight: 500;" x-text="$store.app.selectedProduct.priceFormatted"></span>
              <template x-if="$store.app.selectedProduct.originalPrice">
                <span style="text-decoration: line-through; color: rgba(45,33,24,0.45); font-size: 1.1rem;" x-text="'৳ ' + $store.app.selectedProduct.originalPrice.toLocaleString()"></span>
              </template>
              <span style="font-size: 0.75rem; color: #2e7d32; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; background: #e8f5e9; padding: 0.2rem 0.6rem; border-radius: 2px;">In Stock</span>
            </div>

            <p class="body-lead" style="font-size: 0.95rem; margin-bottom: 2rem;" x-text="$store.app.selectedProduct.description"></p>

            {/* Variant Selector */}
            <div style="margin-bottom: 2rem;" x-show="$store.app.selectedProduct.colors && $store.app.selectedProduct.colors.length">
              <span class="micro-label" style="display: block; margin-bottom: 0.75rem;">
                Color: <strong style="color: var(--brand-brown);" x-text="$store.app.selectedColor"></strong>
              </span>
              <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                <template x-for="color in $store.app.selectedProduct.colors">
                  <button 
                    class="btn btn-secondary"
                    style="padding: 0.5rem 1.25rem; font-size: 0.75rem;"
                    x-bind:class="{ 'btn-primary': $store.app.selectedColor === color }"
                    x-on:click="$store.app.selectedColor = color"
                    x-text="color"
                  ></button>
                </template>
              </div>
            </div>

            {/* Quantity Selector & Action Buttons */}
            <div style="display: flex; gap: 1rem; margin-bottom: 2rem; align-items: center; flex-wrap: wrap;">
              {/* Quantity Picker */}
              <div style="display: flex; align-items: center; border: 1px solid var(--warm-beige); border-radius: 4px; background: #fff;">
                <button 
                  style="border: none; background: none; padding: 0.8rem 1rem; cursor: pointer; color: var(--deep-espresso);"
                  x-on:click="if($store.app.selectedQuantity > 1) $store.app.selectedQuantity--"
                >-</button>
                <span style="padding: 0.8rem 1rem; font-weight: 600; font-size: 0.9rem;" x-text="$store.app.selectedQuantity"></span>
                <button 
                  style="border: none; background: none; padding: 0.8rem 1rem; cursor: pointer; color: var(--deep-espresso);"
                  x-on:click="$store.app.selectedQuantity++"
                >+</button>
              </div>

              {/* Add To Bag */}
              <button 
                class="btn btn-primary"
                style="flex-grow: 1; padding: 1rem 2rem;"
                x-on:click="$store.app.addToCart($store.app.selectedProduct, $store.app.selectedColor, $store.app.selectedQuantity)"
              >
                Add To Bag
              </button>

              {/* Buy Now */}
              <button 
                class="btn btn-secondary"
                style="padding: 1rem 2rem;"
                x-on:click="$store.app.addToCart($store.app.selectedProduct, $store.app.selectedColor, $store.app.selectedQuantity); $store.app.isCheckoutOpen = true;"
              >
                Buy Now
              </button>

              {/* Wishlist Toggle */}
              <button 
                class="icon-btn"
                style="border: 1px solid var(--warm-beige); border-radius: 4px; padding: 0.9rem;"
                x-bind:class="{ 'active': $store.app.isInWishlist($store.app.selectedProduct.id) }"
                x-on:click="$store.app.toggleWishlist($store.app.selectedProduct)"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>

            {/* Accordions */}
            <div style="border-top: 1px solid var(--warm-beige); margin-top: auto;">
              {/* Product Details Accordion */}
              <div class="accordion-item">
                <button 
                  class="accordion-header"
                  x-on:click="openAccordion = openAccordion === 'details' ? '' : 'details'"
                >
                  <span>Product Details</span>
                  <span x-text="openAccordion === 'details' ? '−' : '+'"></span>
                </button>
                <div class="accordion-content" x-show="openAccordion === 'details'">
                  <p x-text="$store.app.selectedProduct.details"></p>
                </div>
              </div>

              {/* Shipping & Delivery Accordion */}
              <div class="accordion-item">
                <button 
                  class="accordion-header"
                  x-on:click="openAccordion = openAccordion === 'shipping' ? '' : 'shipping'"
                >
                  <span>Shipping & Delivery</span>
                  <span x-text="openAccordion === 'shipping' ? '−' : '+'"></span>
                </button>
                <div class="accordion-content" x-show="openAccordion === 'shipping'">
                  <p>Fast express shipping across Bangladesh. Inside Dhaka: 24-48 hours (৳120). Outside Dhaka: 3-4 business days (৳150). Complimentary luxury packaging included with every order.</p>
                </div>
              </div>

              {/* Returns & Exchange Accordion */}
              <div class="accordion-item">
                <button 
                  class="accordion-header"
                  x-on:click="openAccordion = openAccordion === 'returns' ? '' : 'returns'"
                >
                  <span>Returns & Exchange</span>
                  <span x-text="openAccordion === 'returns' ? '−' : '+'"></span>
                </button>
                <div class="accordion-content" x-show="openAccordion === 'returns'">
                  <p>Hassle-free 7-day exchange window for undamaged items in original packaging. Contact our customer care team via WhatsApp or email to arrange pickup.</p>
                </div>
              </div>

              {/* Care Instructions Accordion */}
              <div class="accordion-item">
                <button 
                  class="accordion-header"
                  x-on:click="openAccordion = openAccordion === 'care' ? '' : 'care'"
                >
                  <span>Care Instructions</span>
                  <span x-text="openAccordion === 'care' ? '−' : '+'"></span>
                </button>
                <div class="accordion-content" x-show="openAccordion === 'care'">
                  <p x-text="$store.app.selectedProduct.careInstructions"></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like Recommendation Grid */}
        <div style="margin-top: 6rem; border-top: 1px solid var(--warm-beige); padding-top: 4rem;">
          <div style="text-align: center; margin-bottom: 3rem;">
            <span class="micro-label">Curated Pairings</span>
            <h2 class="heading-lg" style="color: var(--brand-brown-dark); margin-top: 0.5rem;">
              You May Also Like
            </h2>
          </div>

          <div class="product-grid">
            {PRODUCTS.slice(0, 4).map(product => (
              <div class="product-card">
                <div class="product-image-container">
                  <a 
                    href="#" 
                    x-on:click={`$event.preventDefault(); $store.app.navigate('product-detail', '${product.category}', '${product.id}');`}
                  >
                    <img src={product.images[0]} alt={product.name} class="product-image-main" loading="lazy" />
                  </a>
                </div>
                <div class="product-info">
                  <span class="product-category">{product.categoryName}</span>
                  <a 
                    href="#" 
                    class="product-title"
                    x-on:click={`$event.preventDefault(); $store.app.navigate('product-detail', '${product.category}', '${product.id}');`}
                  >
                    {product.name}
                  </a>
                  <span class="product-price">{product.priceFormatted}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
