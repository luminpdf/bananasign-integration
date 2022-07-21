import { useEffect } from 'react';
// https://usehooks.com/useOnClickOutside/
function useOnClickOutside(ref, handler) {
    useEffect(function () {
        var listener = function (event) {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current ||
                ref.current.contains((event === null || event === void 0 ? void 0 : event.target) || null)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return function () {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, 
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]);
}
export default useOnClickOutside;
//# sourceMappingURL=useOnClickOutside.js.map