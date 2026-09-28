import { App } from '$/components/app';
import '$/styles/index.css';
import Alpine from 'alpinejs';
import { initAppStore } from '$/store/appStore';

// Initialize reactive state store
initAppStore(Alpine);

// Bind to window for debug & Alpine access
window.Alpine = Alpine;

// Start Alpine engine
Alpine.start();

// Mount KitaJS HTML JSX layout into #app container
document.querySelector<HTMLDivElement>("#app")!.innerHTML = String(<App />);
