import React from 'react';
export var useRippleButton = function (isRippleEffect) {
    if (!isRippleEffect) {
        return;
    }
    var _a = React.useState({ x: -1, y: -1 }), coords = _a[0], setCoords = _a[1];
    var _b = React.useState(false), isRippling = _b[0], setIsRippling = _b[1];
    React.useEffect(function () {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(function () { return setIsRippling(false); }, 300);
        }
        else
            setIsRippling(false);
    }, [coords]);
    React.useEffect(function () {
        if (!isRippling)
            setCoords({ x: -1, y: -1 });
    }, [isRippling]);
    return { setCoords: setCoords, coords: coords, isRippling: isRippling };
};
//# sourceMappingURL=useRippleButton.js.map