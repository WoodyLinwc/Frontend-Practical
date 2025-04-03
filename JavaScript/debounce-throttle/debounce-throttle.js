// It delays the function invocation by a defined period of time to avoid unnecessary invocations.
// Only runs the function **once** after the delay period expires with no new calls

// Search input (only search after user stops typing)
// Resize event handlers
// Save buttons (prevent multiple rapid saves)
function debounce(func, wait){
    let timeout;

    return function(...args){
        const context = this;
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

// Usage
const debouncedSearch = debounce(searchFunction, 500);
searchInput.addEventListener('input', debouncedSearch);




// it ensures a function executes regularly at a **fixed rate**, no matter how many times it's called.

// Scroll events
// Game input (like controlling movement with keyboard/mouse)
// Mousemove events
// Limiting API calls
function throttle(func, limit){
    let inThrottle = false;

    return function(...args){
        if(!inThrottle){
            func.apply(this, args);
            inThrottle = true;

            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

// Usage
const throttledScroll = throttle(handleScroll, 300);
window.addEventListener('scroll', throttledScroll);
