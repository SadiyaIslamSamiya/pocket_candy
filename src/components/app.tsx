import { Header } from './Header';
import { Hero } from './Hero';
import { BrandIntro } from './BrandIntro';
import { CategoryGrid } from './CategoryGrid';
import { FeaturedProducts } from './FeaturedProducts';
import { CampaignBanner } from './CampaignBanner';
import { SignatureSection } from './SignatureSection';
import { ShopPage } from './ShopPage';
import { ProductDetailView } from './ProductDetailView';
import { AboutPage } from './AboutPage';
import { ReviewsSection } from './ReviewsSection';
import { InstagramGrid } from './InstagramGrid';
import { NewsletterSection } from './NewsletterSection';
import { Footer } from './Footer';

// import { CartDrawer } from './CartDrawer';
// import { WishlistDrawer } from './WishlistDrawer';
// import { QuickViewModal } from './QuickViewModal';
// import { SearchModal } from './SearchModal';
// import { CheckoutModal } from './CheckoutModal';
// import { Toast } from './Toast';

export function App() {
  return (
    <div id="pocket-candy-app">
      {/* Sticky Luxury Navigation Header */}
      <Header />

      {/* Main Content Area (Dynamic Views) */}
      <main>
        {/* Home View */}
        <div x-show="$store.app.currentView === 'home'">
          <Hero />
          <BrandIntro />
          <CategoryGrid />
          <FeaturedProducts />
          <CampaignBanner />
          <SignatureSection />
          <ReviewsSection />
          <InstagramGrid />
          <NewsletterSection />
        </div>

        {/* Shop View */}
        <div x-show="$store.app.currentView === 'shop'">
          <ShopPage />
        </div>

        {/* Product Detail View */}
        <div x-show="$store.app.currentView === 'product-detail'">
          <ProductDetailView />
        </div>

        {/* About Page View */}
        <div x-show="$store.app.currentView === 'about'">
          <AboutPage />
        </div>
      </main>

      {/* Global Brand Footer */}
      <Footer />

      {/* Slide-over Drawers & Modals
      <CartDrawer />
      <WishlistDrawer />
      <QuickViewModal />
      <SearchModal />
      <CheckoutModal />
      <Toast /> */}
    </div>
  );
}
