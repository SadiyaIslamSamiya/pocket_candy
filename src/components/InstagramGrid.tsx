export function InstagramGrid() {
  const instaPosts = [
    { id: 1, image: '/images/hero_banner.png' },
    { id: 2, image: '/images/cat_handbags.png' },
    { id: 3, image: '/images/intro_editorial.png' },
    { id: 4, image: '/images/cat_phone_cases.png' },
    { id: 5, image: '/images/cat_tote_bags.png' },
    { id: 6, image: '/images/campaign_banner.png' }
  ];

  return (
    <section class="instagram-section section-cream">
      <div class="container">
        <div style="text-align: center; max-width: 600px; margin: 0 auto;">
          <span class="micro-label">Social Feed</span>
          <h2 class="heading-lg" style="color: var(--brand-brown-dark); margin: 0.5rem 0 0.5rem;">
            Follow The Pocket Candy World
          </h2>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style="font-family: var(--font-sans); font-size: 0.85rem; font-weight: 600; letter-spacing: 0.15em; color: var(--brand-brown); text-decoration: none;"
          >
            @POCKETCANDYBD
          </a>
        </div>

        <div class="insta-grid">
          {instaPosts.map((post) => (
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="insta-card"
            >
              <img src={post.image} alt="Pocket Candy Social Post" loading="lazy" />
              <div class="insta-overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
