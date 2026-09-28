export function NewsletterSection() {
  return (
    <section class="newsletter-section">
      <div class="container">
        <div class="newsletter-box">
          <span class="micro-label">Private Journal</span>
          <h2 class="heading-lg" style="color: var(--brand-brown-dark); margin: 0.5rem 0 1rem;">
            Stay In The Pocket Candy World.
          </h2>
          <p class="body-lead" style="font-size: 0.95rem;">
            Discover new arrivals, curated collections and special updates sent directly to your inbox.
          </p>

          <form 
            class="newsletter-form"
            x-data="{ email: '' }"
            x-on:submit="$event.preventDefault(); if(email){ $store.app.addToast('Thank you for subscribing to Pocket Candy', 'success'); email = ''; }"
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              class="newsletter-input" 
              required
              x-model="email"
            />
            <button type="submit" class="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
