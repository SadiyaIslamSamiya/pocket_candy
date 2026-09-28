import { REVIEWS } from '../data/products';

export function ReviewsSection() {
  return (
    <section class="section-cream-dark" style="padding: 6rem 0;">
      <div class="container">
        <div style="text-align: center; max-width: 600px; margin: 0 auto 3.5rem;">
          <span class="micro-label">Testimonials</span>
          <h2 class="heading-lg" style="color: var(--brand-brown-dark); margin-top: 0.5rem;">
            Loved By Our Customers
          </h2>
        </div>

        <div class="responsive-grid">
          {REVIEWS.map((rev) => (
            <div
              style="background-color: var(--cream-light); border: 1px solid var(--warm-beige); border-radius: 4px; padding: 2.2rem; display: flex; flex-direction: column; justify-content: space-between;"
            >
              <div>
                <div style="display: flex; gap: 0.25rem; color: var(--gold-accent); margin-bottom: 1.25rem;">
                  {[...Array(rev.rating)].map(() => (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p class="font-serif" style="font-size: 1.2rem; color: var(--deep-espresso); line-height: 1.5; margin-bottom: 1.5rem; font-style: italic;">
                  "{rev.comment}"
                </p>
              </div>

              <div style="border-top: 1px solid rgba(216, 200, 178, 0.5); padding-top: 1rem;">
                <h4 style="font-family: var(--font-sans); font-size: 0.9rem; font-weight: 600; color: var(--brand-brown);">
                  {rev.author}
                </h4>
                <p style="font-size: 0.75rem; color: rgba(45,33,24,0.6);">
                  Verified Buyer — {rev.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
