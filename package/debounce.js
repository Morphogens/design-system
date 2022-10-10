export default function debounce(func, wait, immediate = false) {
    let timeout = null;
    return function (...args) {
        function later() {
            timeout = null;
            if (!immediate)
                func(args);
        }
        const callNow = immediate && !timeout;
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(later, wait);
        if (callNow)
            func(args);
    };
}
