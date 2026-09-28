export function QuickViewModal() {
  return (
    <div 
      class="fixed inset-0 bg-deep-espresso/65 backdrop-blur-md z-[3000] flex items-center justify-center p-4 sm:p-8 opacity-0 pointer-events-none transition-opacity duration-300" 
      x-bind:class="{ 'opacity-100 pointer-events-auto': $store.app.isQuickViewOpen }"
      x-on:click="if($event.target === $event.currentTarget) $store.app.closeQuickView()"
    >
      <div class="bg-cream-light rounded-md max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl scale-95 transition-transform duration-300">
        <button 
          class="absolute top-5 right-5 bg-white/80 border-none w-9 h-9 rounded-full cursor-pointer z-10 flex items-center justify-center text-deep-espresso hover:bg-brand-brown hover:text-white transition-colors" 
          x-on:click="$store.app.closeQuickView()"
        >
          ✕
        </button>

        <template x-if="$store.app.quickViewProduct">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-10">
            {/* Image */}
            <div class="h-80 sm:h-96 overflow-hidden rounded bg-cream">
              <img 
                x-bind:src="$store.app.quickViewProduct.images[0]" 
                x-bind:alt="$store.app.quickViewProduct.name"
                class="w-full h-full object-cover" 
              />
            </div>

            {/* Info */}
            <div class="flex flex-col justify-center">
              <span class="text-xs uppercase tracking-[0.2em] font-semibold text-brand-brown mb-1" x-text="$store.app.quickViewProduct.categoryName"></span>
              <h3 class="font-serif text-3xl text-brand-brown-dark mb-3" x-text="$store.app.quickViewProduct.name"></h3>
              <p class="text-xl font-semibold text-brand-brown mb-4" x-text="$store.app.quickViewProduct.priceFormatted"></p>
              <p class="text-sm font-light text-deep-espresso/80 mb-6 leading-relaxed" x-text="$store.app.quickViewProduct.description"></p>

              <div class="flex gap-4">
                <button 
                  class="flex-1 py-3 px-6 bg-brand-brown hover:bg-brand-brown-dark text-cream-light rounded text-xs font-semibold uppercase tracking-wider border border-brand-brown cursor-pointer transition-colors"
                  x-on:click="$store.app.addToCart($store.app.quickViewProduct); $store.app.closeQuickView();"
                >
                  Add to Bag
                </button>
                <button 
                  class="py-3 px-6 bg-transparent hover:bg-brand-brown text-brand-brown hover:text-cream-light rounded text-xs font-semibold uppercase tracking-wider border border-brand-brown cursor-pointer transition-colors"
                  x-on:click="$store.app.navigate('product-detail', $store.app.quickViewProduct.category, $store.app.quickViewProduct.id); $store.app.closeQuickView();"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  );
}
