export function WishlistDrawer() {
  return (
    <div>
      <div 
        class="drawer-backdrop" 
        x-bind:class="{ 'active': $store.app.isWishlistOpen }"
        x-on:click="$store.app.isWishlistOpen = false"
      ></div>

      <div 
        class="drawer-panel"
        x-bind:class="{ 'active': $store.app.isWishlistOpen }"
      >
        <div class="drawer-header">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <h3 class="heading-md" style="color: var(--brand-brown-dark);">Saved Wishlist</h3>
            <span class="badge-tag" x-text="`(${ $store.app.wishlistCount })`"></span>
          </div>
          <button class="icon-btn" x-on:click="$store.app.isWishlistOpen = false">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="drawer-body">
          <template x-if="$store.app.wishlist.length === 0">
            <div style="text-align: center; padding: 4rem 1rem;">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--warm-beige)" stroke-width="1.5" style="margin-bottom: 1.5rem;">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <h4 class="font-serif" style="font-size: 1.5rem; color: var(--brand-brown-dark); margin-bottom: 0.5rem;">
                No Favorites Saved
              </h4>
              <p style="font-size: 0.88rem; color: rgba(45,33,24,0.6); margin-bottom: 2rem;">
                Click the heart icon on any product to curate your personal Pocket Candy wish list.
              </p>
            </div>
          </template>

          <template x-for="item in $store.app.wishlist">
            <div class="cart-item">
              <img x-bind:src="item.images[0]" x-bind:alt="item.name" class="cart-item-img" />
              <div class="cart-item-info">
                <h4 style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--deep-espresso); margin-bottom: 0.25rem;" x-text="item.name"></h4>
                <p style="font-size: 0.9rem; font-weight: 600; color: var(--brand-brown); margin-bottom: 0.5rem;" x-text="item.priceFormatted"></p>
                
                <button 
                  class="btn btn-primary"
                  style="padding: 0.4rem 0.8rem; font-size: 0.65rem;"
                  x-on:click="$store.app.addToCart(item); $store.app.toggleWishlist(item);"
                >
                  Move To Bag
                </button>
              </div>
              <button 
                style="border: none; background: none; color: rgba(45,33,24,0.4); cursor: pointer;"
                x-on:click="$store.app.toggleWishlist(item)"
              >
                ✕
              </button>
            </div>
          </template>
        </div>
      </div>
    </div>
  );
}
