import { PRODUCTS, Product } from '../data/products';

export interface CartItem {
  id: string;
  product: Product;
  color: string;
  quantity: number;
}

export const initAppStore = (Alpine: any) => {
  Alpine.store('app', {
    // View state
    currentView: 'home', // 'home' | 'shop' | 'about' | 'product-detail'
    selectedCategory: 'all',
    searchQuery: '',
    sortBy: 'featured',
    priceRange: 6000,
    
    // Product Detail state
    selectedProduct: PRODUCTS[0],
    activeDetailImageIndex: 0,
    selectedColor: PRODUCTS[0].colors[0],
    selectedQuantity: 1,
    
    // Modals & Drawers
    isCartOpen: false,
    isWishlistOpen: false,
    isQuickViewOpen: false,
    quickViewProduct: null as Product | null,
    isSearchOpen: false,
    isMobileMenuOpen: false,
    isCheckoutOpen: false,
    checkoutStep: 'shipping',
    
    // Ecommerce lists
    cart: [] as CartItem[],
    wishlist: [] as Product[],
    
    // Checkout & Promo
    promoCode: '',
    promoApplied: false,
    discountPercent: 0,
    shippingCost: 120, // BDT standard shipping
    customerInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: 'Dhaka',
      paymentMethod: 'cod' // 'cod' | 'bkash' | 'card'
    },
    
    // Toast notifications
    toasts: [] as Array<{ id: string; message: string; type: string }>,

    // Actions
    navigate(view: string, category: string = 'all', productId?: string) {
      this.currentView = view;
      if (category) this.selectedCategory = category;
      if (productId) {
        const prod = PRODUCTS.find(p => p.id === productId);
        if (prod) {
          this.selectedProduct = prod;
          this.activeDetailImageIndex = 0;
          this.selectedColor = prod.colors[0] || '';
          this.selectedQuantity = 1;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    addToCart(product: Product, color?: string, quantity: number = 1) {
      const itemColor = color || product.colors[0] || 'Default';
      const existingIndex = this.cart.findIndex(
        (ci: CartItem) => ci.product.id === product.id && ci.color === itemColor
      );

      if (existingIndex > -1) {
        this.cart[existingIndex].quantity += quantity;
      } else {
        this.cart.push({
          id: `${product.id}-${itemColor}`,
          product,
          color: itemColor,
          quantity
        });
      }

      this.addToast(`Added "${product.name}" to your bag`, 'success');
      this.isCartOpen = true;
    },

    removeFromCart(index: number) {
      const item = this.cart[index];
      this.cart.splice(index, 1);
      if (item) {
        this.addToast(`Removed "${item.product.name}" from bag`, 'info');
      }
    },

    updateCartQuantity(index: number, qty: number) {
      if (qty <= 0) {
        this.removeFromCart(index);
      } else {
        this.cart[index].quantity = qty;
      }
    },

    toggleWishlist(product: Product) {
      const idx = this.wishlist.findIndex((p: Product) => p.id === product.id);
      if (idx > -1) {
        this.wishlist.splice(idx, 1);
        this.addToast(`Removed from your wishlist`, 'info');
      } else {
        this.wishlist.push(product);
        this.addToast(`Saved "${product.name}" to wishlist`, 'success');
      }
    },

    isInWishlist(productId: string): boolean {
      return this.wishlist.some((p: Product) => p.id === productId);
    },

    openQuickView(product: Product) {
      this.quickViewProduct = product;
      this.isQuickViewOpen = true;
    },

    closeQuickView() {
      this.isQuickViewOpen = false;
      this.quickViewProduct = null;
    },

    applyPromoCode() {
      if (this.promoCode.trim().toUpperCase() === 'POCKET10') {
        this.promoApplied = true;
        this.discountPercent = 10;
        this.addToast('10% discount applied!', 'success');
      } else if (this.promoCode.trim().toUpperCase() === 'WELCOME15') {
        this.promoApplied = true;
        this.discountPercent = 15;
        this.addToast('15% welcome discount applied!', 'success');
      } else {
        this.addToast('Invalid promo code. Try "POCKET10"', 'info');
      }
    },

    get cartSubtotal(): number {
      return this.cart.reduce((sum: number, item: CartItem) => sum + (item.product.price * item.quantity), 0);
    },

    get cartDiscount(): number {
      if (!this.promoApplied) return 0;
      return Math.round((this.cartSubtotal * this.discountPercent) / 100);
    },

    get cartTotal(): number {
      return Math.max(0, this.cartSubtotal - this.cartDiscount + (this.cart.length > 0 ? this.shippingCost : 0));
    },

    get cartCount(): number {
      return this.cart.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
    },

    get wishlistCount(): number {
      return this.wishlist.length;
    },

    addToast(message: string, type: 'success' | 'info' = 'success') {
      const id = Date.now().toString();
      this.toasts.push({ id, message, type });
      setTimeout(() => {
        const index = this.toasts.findIndex((t: any) => t.id === id);
        if (index > -1) this.toasts.splice(index, 1);
      }, 3500);
    },

    processOrder() {
      this.checkoutStep = 'confirmation';
      this.addToast('Order placed successfully! Thank you for choosing Pocket Candy.', 'success');
    },

    resetCart() {
      this.cart = [];
      this.promoApplied = false;
      this.promoCode = '';
      this.isCheckoutOpen = false;
      this.checkoutStep = 'shipping';
    }
  });
};
