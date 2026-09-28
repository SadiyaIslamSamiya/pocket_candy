export function Header() {
  return (
    <header 
      class="header-sticky"
      x-data="{ scrolled: false }"
      x-init="window.addEventListener('scroll', () => { scrolled = window.scrollY > 40 })"
      x-bind:class="{ 'scrolled': scrolled }"
    >
      <div class="container header-inner">
        {/* LEFT: Logo */}
        <div class="header-logo-container">
          <a 
            href="#" 
            class="header-logo-wrapper" 
            x-on:click="$event.preventDefault(); $store.app.navigate('home');"
          >
            <img 
              src="/logo-2.png" 
              alt="Pocket Candy Logo" 
              class="header-logo-img" 
            />
          </a>
        </div>

        {/* CENTER: Navigation Links */}
        <nav class="header-nav">
          <a 
            href="#" 
            class="nav-link" 
            x-bind:class="{ 'active': $store.app.currentView === 'shop' && $store.app.selectedCategory === 'all' }"
            x-on:click="$event.preventDefault(); $store.app.navigate('shop', 'all');"
          >
            Shop
          </a>
          <a 
            href="#" 
            class="nav-link" 
            x-bind:class="{ 'active': $store.app.currentView === 'shop' && $store.app.selectedCategory === 'handbags' }"
            x-on:click="$event.preventDefault(); $store.app.navigate('shop', 'handbags');"
          >
            Collections
          </a>
          <a 
            href="#" 
            class="nav-link" 
            x-on:click="$event.preventDefault(); $store.app.navigate('shop', 'new-arrivals');"
          >
            New Arrivals
          </a>
          <a 
            href="#" 
            class="nav-link" 
            x-on:click="$event.preventDefault(); $store.app.navigate('shop', 'bestsellers');"
          >
            Bestsellers
          </a>
          <a 
            href="#" 
            class="nav-link" 
            x-bind:class="{ 'active': $store.app.currentView === 'about' }"
            x-on:click="$event.preventDefault(); $store.app.navigate('about');"
          >
            About
          </a>
        </nav>

        {/* RIGHT: Actions */}
        <div class="header-actions">
          <button 
            class="icon-btn" 
            aria-label="Search"
            x-on:click="$store.app.isSearchOpen = true"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <button 
            class="icon-btn" 
            aria-label="Wishlist"
            x-on:click="$store.app.isWishlistOpen = true"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span 
              class="icon-badge" 
              x-show="$store.app.wishlistCount > 0" 
              x-text="$store.app.wishlistCount"
            ></span>
          </button>

          <button 
            class="icon-btn" 
            aria-label="Account"
            x-on:click="$store.app.addToast('Welcome back to Pocket Candy', 'info')"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>

          <button 
            class="icon-btn" 
            aria-label="Shopping Bag"
            x-on:click="$store.app.isCartOpen = true"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span 
              class="icon-badge" 
              x-show="$store.app.cartCount > 0" 
              x-text="$store.app.cartCount"
            ></span>
          </button>

          <button 
            class="icon-btn mobile-only" 
            aria-label="Menu"
            x-on:click="$store.app.isMobileMenuOpen = !$store.app.isMobileMenuOpen"
            style="display: none;"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
