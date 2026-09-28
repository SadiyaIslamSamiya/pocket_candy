export function CheckoutModal() {
  return (
    <div 
      class="fixed inset-0 bg-deep-espresso/65 backdrop-blur-md z-[3000] flex items-center justify-center p-4 sm:p-8 opacity-0 pointer-events-none transition-opacity duration-300" 
      x-bind:class="{ 'opacity-100 pointer-events-auto': $store.app.isCheckoutOpen }"
      x-on:click="if($event.target === $event.currentTarget && $store.app.checkoutStep !== 'confirmation') $store.app.isCheckoutOpen = false;"
    >
      <div class="bg-cream-light rounded-md max-w-4xl w-full p-8 sm:p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto scale-95 transition-transform duration-300">
        <button 
          class="absolute top-5 right-5 bg-white/80 border-none w-9 h-9 rounded-full cursor-pointer z-10 flex items-center justify-center text-deep-espresso hover:bg-brand-brown hover:text-white transition-colors" 
          x-on:click="if($store.app.checkoutStep === 'confirmation') { $store.app.resetCart(); } else { $store.app.isCheckoutOpen = false; }"
        >
          ✕
        </button>

        {/* STEP 1 & 2: Checkout Form */}
        <template x-if="$store.app.checkoutStep !== 'confirmation'">
          <div>
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-warm-beige pb-4 mb-8 gap-4">
              <div>
                <span class="text-xs uppercase tracking-[0.2em] font-semibold text-brand-brown block mb-1">Secure Checkout</span>
                <h3 class="font-serif text-3xl text-brand-brown-dark">
                  Pocket Candy Order
                </h3>
              </div>
              
              <div class="flex gap-6 text-xs uppercase tracking-wider font-semibold">
                <span x-bind:class="$store.app.checkoutStep === 'shipping' ? 'text-brand-brown border-b-2 border-brand-brown pb-1' : 'text-deep-espresso/40'">1. Shipping</span>
                <span x-bind:class="$store.app.checkoutStep === 'payment' ? 'text-brand-brown border-b-2 border-brand-brown pb-1' : 'text-deep-espresso/40'">2. Payment</span>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Form Content */}
              <div class="lg:col-span-7">
                {/* Step 1: Shipping Form */}
                <div x-show="$store.app.checkoutStep === 'shipping'">
                  <h4 class="font-serif text-xl text-brand-brown mb-4">
                    Shipping Details (Bangladesh)
                  </h4>

                  <div class="flex flex-col gap-4">
                    <div>
                      <label class="text-[11px] font-semibold uppercase tracking-wider block mb-1">Full Name *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Nusrat Jahan"
                        x-model="$store.app.customerInfo.name"
                        class="w-full p-3 border border-warm-beige rounded text-sm bg-white outline-none focus:border-brand-brown"
                        required
                      />
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label class="text-[11px] font-semibold uppercase tracking-wider block mb-1">Mobile Phone *</label>
                        <input 
                          type="tel" 
                          placeholder="017XXXXXXXX"
                          x-model="$store.app.customerInfo.phone"
                          class="w-full p-3 border border-warm-beige rounded text-sm bg-white outline-none focus:border-brand-brown"
                          required
                        />
                      </div>

                      <div>
                        <label class="text-[11px] font-semibold uppercase tracking-wider block mb-1">Email Address</label>
                        <input 
                          type="email" 
                          placeholder="name@example.com"
                          x-model="$store.app.customerInfo.email"
                          class="w-full p-3 border border-warm-beige rounded text-sm bg-white outline-none focus:border-brand-brown"
                        />
                      </div>
                    </div>

                    <div>
                      <label class="text-[11px] font-semibold uppercase tracking-wider block mb-1">Full Delivery Address *</label>
                      <textarea 
                        rows="2" 
                        placeholder="House / Apartment number, Road, Area, Thana"
                        x-model="$store.app.customerInfo.address"
                        class="w-full p-3 border border-warm-beige rounded text-sm bg-white outline-none focus:border-brand-brown font-sans"
                        required
                      ></textarea>
                    </div>

                    <div>
                      <label class="text-[11px] font-semibold uppercase tracking-wider block mb-1">City / Division</label>
                      <select 
                        x-model="$store.app.customerInfo.city"
                        x-on:change="$store.app.shippingCost = $store.app.customerInfo.city === 'Dhaka' ? 120 : 150"
                        class="w-full p-3 border border-warm-beige rounded text-sm bg-white outline-none focus:border-brand-brown cursor-pointer"
                      >
                        <option value="Dhaka">Dhaka (Inside City - ৳120)</option>
                        <option value="Chittagong">Chittagong (Outside City - ৳150)</option>
                        <option value="Sylhet">Sylhet (Outside City - ৳150)</option>
                        <option value="Rajshahi">Rajshahi (Outside City - ৳150)</option>
                        <option value="Khulna">Khulna (Outside City - ৳150)</option>
                        <option value="Other">Other Districts in BD (৳150)</option>
                      </select>
                    </div>

                    <button 
                      class="mt-4 w-full py-3.5 bg-brand-brown hover:bg-brand-brown-dark text-cream-light text-xs font-semibold uppercase tracking-[0.18em] rounded border border-brand-brown cursor-pointer transition-colors shadow-md"
                      x-on:click="if($store.app.customerInfo.name && $store.app.customerInfo.phone && $store.app.customerInfo.address) { $store.app.checkoutStep = 'payment'; } else { $store.app.addToast('Please complete required fields', 'info'); }"
                    >
                      Continue To Payment
                    </button>
                  </div>
                </div>

                {/* Step 2: Payment Method Form */}
                <div x-show="$store.app.checkoutStep === 'payment'">
                  <h4 class="font-serif text-xl text-brand-brown mb-4">
                    Select Payment Method
                  </h4>

                  <div class="flex flex-col gap-3 mb-6">
                    <label class="flex items-center gap-4 p-4 border border-warm-beige rounded bg-white cursor-pointer hover:border-brand-brown transition-colors">
                      <input type="radio" name="payment" value="cod" x-model="$store.app.customerInfo.paymentMethod" checked />
                      <div>
                        <strong class="block text-sm text-deep-espresso">Cash on Delivery (COD)</strong>
                        <span class="text-xs text-deep-espresso/60">Pay cash to delivery officer upon receiving your package.</span>
                      </div>
                    </label>

                    <label class="flex items-center gap-4 p-4 border border-warm-beige rounded bg-white cursor-pointer hover:border-brand-brown transition-colors">
                      <input type="radio" name="payment" value="bkash" x-model="$store.app.customerInfo.paymentMethod" />
                      <div>
                        <strong class="block text-sm text-deep-espresso">bKash / Nagad Mobile Banking</strong>
                        <span class="text-xs text-deep-espresso/60">Instant payment via bKash Merchant Gateway (01712-XXXXXX).</span>
                      </div>
                    </label>

                    <label class="flex items-center gap-4 p-4 border border-warm-beige rounded bg-white cursor-pointer hover:border-brand-brown transition-colors">
                      <input type="radio" name="payment" value="card" x-model="$store.app.customerInfo.paymentMethod" />
                      <div>
                        <strong class="block text-sm text-deep-espresso">Credit / Debit Card (Visa / Mastercard)</strong>
                        <span class="text-xs text-deep-espresso/60">Secured 256-bit encrypted card processing.</span>
                      </div>
                    </label>
                  </div>

                  <div class="flex gap-4">
                    <button class="px-6 py-3 bg-transparent text-brand-brown border border-brand-brown rounded text-xs font-semibold uppercase tracking-wider cursor-pointer hover:bg-brand-brown hover:text-cream-light transition-colors" x-on:click="$store.app.checkoutStep = 'shipping'">Back</button>
                    <button class="flex-1 py-3 bg-brand-brown hover:bg-brand-brown-dark text-cream-light rounded text-xs font-semibold uppercase tracking-[0.18em] border border-brand-brown cursor-pointer transition-colors shadow-md" x-on:click="$store.app.processOrder()">Complete Order</button>
                  </div>
                </div>
              </div>

              {/* Order Summary Column */}
              <div class="lg:col-span-5 bg-cream p-6 rounded border border-warm-beige h-fit">
                <h4 class="font-serif text-xl text-brand-brown-dark mb-4 border-b border-warm-beige pb-2">
                  Order Summary
                </h4>

                <div class="flex flex-col gap-3 max-h-56 overflow-y-auto mb-4">
                  <template x-for="item in $store.app.cart">
                    <div class="flex justify-between text-xs">
                      <span x-text="`${item.quantity}x ${item.product.name}`" class="truncate max-w-[170px]"></span>
                      <span class="font-semibold" x-text="'৳ ' + (item.product.price * item.quantity).toLocaleString()"></span>
                    </div>
                  </template>
                </div>

                <div class="border-t border-warm-beige pt-3 flex flex-col gap-2 text-xs">
                  <div class="flex justify-between">
                    <span>Subtotal:</span>
                    <span x-text="'৳ ' + $store.app.cartSubtotal.toLocaleString()"></span>
                  </div>
                  <template x-if="$store.app.promoApplied">
                    <div class="flex justify-between text-emerald-700 font-medium">
                      <span>Discount:</span>
                      <span x-text="'-৳ ' + $store.app.cartDiscount.toLocaleString()"></span>
                    </div>
                  </template>
                  <div class="flex justify-between">
                    <span>Shipping:</span>
                    <span x-text="'৳ ' + $store.app.shippingCost"></span>
                  </div>
                  <div class="flex justify-between font-bold text-base text-brand-brown border-t border-warm-beige pt-2 mt-1">
                    <span>Grand Total:</span>
                    <span x-text="'৳ ' + $store.app.cartTotal.toLocaleString()"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>

        {/* STEP 3: Order Confirmation */}
        <template x-if="$store.app.checkoutStep === 'confirmation'">
          <div class="text-center py-8">
            <img src="/logo-2.png" alt="Pocket Candy Logo" class="h-16 mx-auto mb-6 rounded" />
            
            <div class="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>

            <h2 class="font-serif text-4xl text-brand-brown-dark mb-2">
              Thank You For Your Order!
            </h2>
            <p class="text-sm font-light text-deep-espresso/80 mb-6 max-w-lg mx-auto">
              Your order <strong class="text-brand-brown" x-text="'#PC-' + Math.floor(100000 + Math.random() * 900000)"></strong> has been placed and is being carefully packaged in our signature luxury presentation box.
            </p>

            <div class="bg-cream border border-warm-beige rounded p-6 max-w-md mx-auto mb-8 text-left text-xs space-y-2">
              <div class="flex justify-between">
                <span class="text-deep-espresso/60">Customer:</span>
                <strong x-text="$store.app.customerInfo.name || 'Valued Customer'"></strong>
              </div>
              <div class="flex justify-between">
                <span class="text-deep-espresso/60">Delivery Address:</span>
                <span x-text="($store.app.customerInfo.address || 'Dhaka') + ', ' + $store.app.customerInfo.city"></span>
              </div>
              <div class="flex justify-between">
                <span class="text-deep-espresso/60">Payment Method:</span>
                <span class="uppercase" x-text="$store.app.customerInfo.paymentMethod"></span>
              </div>
              <div class="flex justify-between border-t border-warm-beige pt-2 font-bold text-brand-brown text-sm">
                <span>Total Amount Paid:</span>
                <span x-text="'৳ ' + $store.app.cartTotal.toLocaleString()"></span>
              </div>
            </div>

            <button 
              class="px-8 py-3.5 bg-brand-brown hover:bg-brand-brown-dark text-cream-light rounded text-xs font-semibold uppercase tracking-[0.18em] border border-brand-brown cursor-pointer transition-colors shadow-md"
              x-on:click="$store.app.resetCart(); $store.app.navigate('home');"
            >
              Continue Exploring Pocket Candy
            </button>
          </div>
        </template>
      </div>
    </div>
  );
}
