export function CartDrawer() {
  return (
    <div>
      {/* Backdrop */}
      <div 
        class="drawer-backdrop" 
        x-bind:class="{ 'active': $store.app.isCartOpen }"
        x-on:click="$store.app.isCartOpen = false"
      ></div>

      {/* Drawer Panel */}
      <div 
        class="drawer-panel"
        x-bind:class="{ 'active': $store.app.isCartOpen }"
      >
        {/* Header */}
        <div class="drawer-header">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <h3 class="heading-md" style="color: var(--brand-brown-dark);">Shopping Bag</h3>
            <span class="badge-tag" x-text="`(${ $store.app.cartCount })`"></span>
          </div>
          <button class="icon-btn" x-on:click="$store.app.isCartOpen = false">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Body (Items List) */}
        <div class="drawer-body">
          <template x-if="$store.app.cart.length === 0">
            <div style="text-align: center; padding: 4rem 1rem;">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--warm-beige)" stroke-width="1.5" style="margin-bottom: 1.5rem;">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <h4 class="font-serif" style="font-size: 1.5rem; color: var(--brand-brown-dark); margin-bottom: 0.5rem;">
                Your Bag is Empty
              </h4>
              <p style="font-size: 0.88rem; color: rgba(45,33,24,0.6); margin-bottom: 2rem;">
                Explore our curated collection of fashion accessories and find your signature piece.
              </p>
              <button 
                class="btn btn-primary"
                x-on:click="$store.app.isCartOpen = false; $store.app.navigate('shop', 'all');"
              >
                Start Shopping
              </button>
            </div>
          </template>

          <template x-for="(item, idx) in $store.app.cart">
            <div class="cart-item">
              <img x-bind:src="item.product.images[0]" x-bind:alt="item.product.name" class="cart-item-img" />
              <div class="cart-item-info">
                <h4 style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--deep-espresso); margin-bottom: 0.25rem;" x-text="item.product.name"></h4>
                <p style="font-size: 0.75rem; color: var(--muted-caramel); margin-bottom: 0.5rem;">
                  Color: <span x-text="item.color"></span>
                </p>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  {/* Quantity adjustment */}
                  <div style="display: flex; align-items: center; border: 1px solid var(--warm-beige); border-radius: 2px;">
                    <button style="border:none; background:none; padding: 0.2rem 0.5rem; cursor:pointer;" x-on:click="$store.app.updateCartQuantity(idx, item.quantity - 1)">-</button>
                    <span style="padding: 0.2rem 0.6rem; font-size: 0.8rem; font-weight: 600;" x-text="item.quantity"></span>
                    <button style="border:none; background:none; padding: 0.2rem 0.5rem; cursor:pointer;" x-on:click="$store.app.updateCartQuantity(idx, item.quantity + 1)">+</button>
                  </div>
                  
                  <span style="font-size: 0.9rem; font-weight: 600; color: var(--brand-brown);" x-text="'৳ ' + (item.product.price * item.quantity).toLocaleString()"></span>
                </div>
              </div>
              <button 
                style="border: none; background: none; color: rgba(45,33,24,0.4); cursor: pointer;"
                x-on:click="$store.app.removeFromCart(idx)"
              >
                ✕
              </button>
            </div>
          </template>
        </div>

        {/* Footer */}
        <template x-if="$store.app.cart.length > 0">
          <div class="drawer-footer">
            {/* Promo Code Input */}
            <div style="display: flex; gap: 0.5rem; margin-bottom: 1.25rem;">
              <input 
                type="text" 
                placeholder="Promo Code (Try POCKET10)" 
                x-model="$store.app.promoCode"
                style="flex-grow: 1; padding: 0.5rem 0.75rem; font-size: 0.8rem; border: 1px solid var(--warm-beige); border-radius: 4px; text-transform: uppercase;"
              />
              <button class="btn btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.7rem;" x-on:click="$store.app.applyPromoCode()">
                Apply
              </button>
            </div>

            {/* Calculations */}
            <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.88rem;">
              <div style="display: flex; justify-content: space-between; color: rgba(45,33,24,0.8);">
                <span>Subtotal</span>
                <span x-text="'৳ ' + $store.app.cartSubtotal.toLocaleString()"></span>
              </div>
              
              <template x-if="$store.app.promoApplied">
                <div style="display: flex; justify-content: space-between; color: #2e7d32;">
                  <span>Promo Discount (<span x-text="$store.app.discountPercent + '%'"></span>)</span>
                  <span x-text="'-৳ ' + $store.app.cartDiscount.toLocaleString()"></span>
                </div>
              </template>

              <div style="display: flex; justify-content: space-between; color: rgba(45,33,24,0.8);">
                <span>Estimated Shipping (BD)</span>
                <span x-text="'৳ ' + $store.app.shippingCost"></span>
              </div>

              <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 1.15rem; color: var(--brand-brown); border-top: 1px solid var(--warm-beige); padding-top: 0.75rem; margin-top: 0.25rem;">
                <span>Total</span>
                <span x-text="'৳ ' + $store.app.cartTotal.toLocaleString()"></span>
              </div>
            </div>

            <button 
              class="btn btn-primary" 
              style="width: 100%; padding: 1rem;"
              x-on:click="$store.app.isCartOpen = false; $store.app.isCheckoutOpen = true;"
            >
              Proceed To Checkout
            </button>
          </div>
        </template>
      </div>
    </div>
  );
}
