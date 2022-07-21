var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './SearchContactEmptyKeyWords.style.scss';
import { Images } from '@src/assets';
var SearchContactEmptyKeyWords = function () {
    return (_jsxs("div", __assign({ className: "NoKeyWords__container" }, { children: [_jsx("div", __assign({ className: "NoKeyWords__banner" }, { children: _jsx("img", { src: Images.image_no_key_words, alt: "NoKeyWords__banner" }) })), _jsx("h4", __assign({ className: "NoKeyWords__title" }, { children: "Search all contacts" })), _jsx("p", __assign({ className: "NoKeyWords__message" }, { children: "Search by email" }))] })));
};
export default SearchContactEmptyKeyWords;
//# sourceMappingURL=SearchContactEmptyKeyWords.js.map