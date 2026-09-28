export function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          {/* Brand Info */}
          <div>
            <img 
              src="/logo-3.png" 
              alt="Pocket Candy Official Logo" 
              class="footer-logo" 
            />
            <p style="font-size: 0.88rem; color: rgba(243,235,221,0.75); line-height: 1.7; max-width: 320px; margin-bottom: 1.5rem;">
              Fashion accessories, curated with intention. Bringing timeless character, warmth, and individuality to your everyday wardrobe.
            </p>
            <p style="font-size: 0.8rem; letter-spacing: 0.12em; color: var(--gold-accent); text-transform: uppercase;">
              Dhaka, Bangladesh
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 class="footer-heading">Navigation</h4>
            <ul class="footer-links">
              <li><a href="#" class="footer-link" x-on:click="$event.preventDefault(); $store.app.navigate('shop', 'all');">Shop All</a></li>
              <li><a href="#" class="footer-link" x-on:click="$event.preventDefault(); $store.app.navigate('shop', 'handbags');">Handbags & Totes</a></li>
              <li><a href="#" class="footer-link" x-on:click="$event.preventDefault(); $store.app.navigate('shop', 'jewelry');">Jewelry Collection</a></li>
              <li><a href="#" class="footer-link" x-on:click="$event.preventDefault(); $store.app.navigate('shop', 'new-arrivals');">New Arrivals</a></li>
              <li><a href="#" class="footer-link" x-on:click="$event.preventDefault(); $store.app.navigate('about');">The World of Pocket Candy</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 class="footer-heading">Customer Care</h4>
            <ul class="footer-links">
              <li><a href="#" class="footer-link" x-on:click="$event.preventDefault(); $store.app.addToast('Contact us at care@pocketcandybd.com', 'info');">Contact Us</a></li>
              <li><a href="#" class="footer-link" x-on:click="$event.preventDefault(); $store.app.addToast('Standard delivery in Dhaka: 24-48 hours', 'info');">Shipping & Delivery</a></li>
              <li><a href="#" class="footer-link" x-on:click="$event.preventDefault(); $store.app.addToast('Easy 7-day exchange policy', 'info');">Returns & Exchange</a></li>
              <li><a href="#" class="footer-link" x-on:click="$event.preventDefault(); $store.app.addToast('Frequently Asked Questions', 'info');">FAQ</a></li>
              <li><a href="#" class="footer-link" x-on:click="$event.preventDefault(); $store.app.addToast('Order tracking active via SMS/Email', 'info');">Order Tracking</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 class="footer-heading">Connect</h4>
            <ul class="footer-links" style="margin-bottom: 1.5rem;">
              <li><a href="https://instagram.com" target="_blank" class="footer-link">Instagram (@pocketcandybd)</a></li>
              <li><a href="https://facebook.com" target="_blank" class="footer-link">Facebook (Pocket Candy BD)</a></li>
            </ul>
            
            <span class="micro-label micro-label-light" style="display: block; margin-bottom: 0.5rem;">Accepted Payments</span>
            <p style="font-size: 0.8rem; color: rgba(243,235,221,0.6);">
              bKash • Nagad • Cash on Delivery • Cards
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div class="footer-bottom">
          <p>© Pocket Candy — Fashion Accessories BD. All rights reserved.</p>
          <div style="display: flex; gap: 1.5rem;">
            <a href="#" class="footer-link" style="font-size: 0.75rem;">Privacy Policy</a>
            <a href="#" class="footer-link" style="font-size: 0.75rem;">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
