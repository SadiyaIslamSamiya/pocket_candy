export function CampaignBanner() {
  return (
    <section class="campaign-section">
      <img 
        src="/images/campaign_banner.png" 
        alt="Pocket Candy Editorial Campaign" 
        class="campaign-bg-img" 
      />
      <div class="campaign-content">
        <span class="micro-label micro-label-light" style="margin-bottom: 1.25rem; display: block;">
          Seasonal Campaign
        </span>
        <h2 class="heading-xl" style="font-size: clamp(2.2rem, 5vw, 4rem); margin-bottom: 2rem; text-shadow: 0 4px 20px rgba(0,0,0,0.4);">
          Little Details.<br />
          A Lot of Character.
        </h2>
        <a 
          href="#" 
          class="btn btn-cream"
          x-on:click="$event.preventDefault(); $store.app.navigate('shop', 'all');"
        >
          Discover Pocket Candy
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
}
