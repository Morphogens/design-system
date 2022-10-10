import { writable } from 'svelte/store';
import debounce from './debounce';
const startingHeight = typeof window === 'undefined' ? 1200 : window.innerHeight;
const windowInnerHeight = writable(startingHeight);
function updateWindowInnerHeight() {
    windowInnerHeight.set(window.innerHeight);
}
const updateWindowInnerHeightAfterDebounce = debounce(updateWindowInnerHeight, 300);
if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateWindowInnerHeightAfterDebounce);
}
export default {
    subscribe: windowInnerHeight.subscribe
};
