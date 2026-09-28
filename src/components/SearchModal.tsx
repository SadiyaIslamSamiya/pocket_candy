import { PRODUCTS } from '../data/products';

export function SearchModal() {
  return (
    <div 
      class="fixed inset-0 bg-deep-espresso/65 backdrop-blur-md z-[3000] flex items-center justify-center p-4 sm:p-8 opacity-0 pointer-events-none transition-opacity duration-300" 
      x-bind:class="{ 'opacity-100 pointer-events-auto': $store.app.isSearchOpen }"
      x-on:click="if($event.target === $event.currentTarget) $store.app.isSearchOpen = false;"
      x-data="{ query: '' }"
    >
      <div class="bg-cream-light rounded-md max-w-2xl w-full p-8 sm:p-10 relative shadow-2xl scale-95 transition-transform duration-300">
        <button class="absolute top-5 right-5 bg-white/80 border-none w-9 h-9 rounded-full cursor-pointer z-10 flex items-center justify-center text-deep-espresso hover:bg-brand-brown hover:text-white transition-colors" x-on:click="$store.app.isSearchOpen = false">
          ✕
        </button>

        <span class="text-xs uppercase tracking-[0.2em] font-semibold text-brand-brown block mb-2">Real-time Search</span>
        <h3 class="font-serif text-3xl text-brand-brown-dark mb-6">
          Search Pocket Candy
        </h3>

        <div class="relative mb-8">
          <input 
            type="text" 
            placeholder="Search handbags, jewelry, phone cases..." 
            x-model="query"
            class="w-full pl-12 pr-4 py-3.5 text-base border border-warm-beige rounded bg-white font-sans outline-none focus:border-brand-brown"
          />
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="absolute left-4 top-1/2 -translate-y-1/2 text-brand-brown">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>

        {/* Live Suggestions Grid */}
        <div>
          <span class="text-[11px] uppercase tracking-[0.15em] text-deep-espresso/50 block mb-4 font-semibold">
            Matches & Suggestions
          </span>

          <div class="flex flex-col gap-3 max-h-72 overflow-y-auto">
            {PRODUCTS.map(product => (
              <div 
                x-show={`!query || '${product.name.toLowerCase()} ${product.categoryName.toLowerCase()}'.includes(query.toLowerCase())`}
                class="flex items-center justify-between p-3 border border-warm-beige rounded bg-white/50 hover:bg-white cursor-pointer transition-colors"
                x-on:click={`$store.app.navigate('product-detail', '${product.category}', '${product.id}'); $store.app.isSearchOpen = false;`}
              >
                <div class="flex items-center gap-4">
                  <img src={product.images[0]} alt={product.name} class="w-11 h-14 object-cover rounded-sm" />
                  <div>
                    <h4 class="font-serif text-lg text-deep-espresso">{product.name}</h4>
                    <span class="text-[10px] uppercase tracking-wider text-muted-caramel font-semibold">{product.categoryName}</span>
                  </div>
                </div>
                <span class="text-sm font-semibold text-brand-brown">{product.priceFormatted}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
