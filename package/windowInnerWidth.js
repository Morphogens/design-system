import { writable } from 'svelte/store';
import debounce from './debounce';
const startingWidth = typeof window === 'undefined' ? 1200 : window.innerWidth;
const windowInnerWidth = writable(startingWidth);
function updateWindowInnerWidth() {
    windowInnerWidth.set(window.innerHeight);
}
const updateWindowInnerWidthAfterDebounce = debounce(updateWindowInnerWidth, 300);
if (typeof window !== 'undefined') {
    window.addEventListener('resize', updateWindowInnerWidthAfterDebounce);
}
export default {
    subscribe: windowInnerWidth.subscribe
};
