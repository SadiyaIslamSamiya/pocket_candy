export function Toast() {
  return (
    <div class="fixed bottom-8 right-8 z-[4000] flex flex-col gap-3 pointer-events-none">
      <template x-for="t in $store.app.toasts">
        <div class="bg-brand-brown-dark text-cream-light px-6 py-4 rounded shadow-2xl flex items-center gap-3 text-xs border-l-4 border-gold-accent pointer-events-auto animate-[slideInRight_0.4s_ease_forwards]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 8v4m0 4h.01"></path>
          </svg>
          <span x-text="t.message"></span>
        </div>
      </template>
    </div>
  );
}
