var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import {GUEST_USER, REQUEST_TYPE} from '@src/constants/common';
var isClientSide = typeof window !== 'undefined';
var isMobile = function () {
  return isClientSide && window.innerWidth < 640;
};
var getAvatarName = function (name) {
  var words = '';
  if (name && name.split(' ').length > 0) {
    name.split(' ').length = 2;
    var arrName = name.split(' ');
    words = arrName[0].charAt(0);
    words = words.toUpperCase();
  }
  return words;
};
var capitalizeLetter = function (string) {
  return string
    .toLowerCase()
    .replace('_', ' ')
    .replace(/\b[a-z]/g, function (letter) {
      return letter.toUpperCase();
    });
};
var validateEmail = function (email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export var debounce = function (func, waitFor) {
  var timeout = null;
  var debounced = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(function () {
      return func.apply(void 0, args);
    }, waitFor);
  };
  return debounced;
};
var serializeAssigners = function (assigners, requestType) {
  var serializeSigners = assigners.map(function (assigner, index) {
    return __assign(__assign({}, assigner), {
      name:
        (assigner === null || assigner === void 0 ? void 0 : assigner.name) ||
        GUEST_USER,
      isOwner: requestType === REQUEST_TYPE.SIGNER && index === 0,
      id:
        (assigner === null || assigner === void 0 ? void 0 : assigner.id) || '',
      requestType: requestType,
      dueTimeExpired: 0,
    });
  });
  return serializeSigners;
};
function compareArrayByElement(firstArray, secondArray, property) {
  if (firstArray.length !== secondArray.length) {
    return false;
  }
  // check object by property
  if (property) {
    return firstArray.every(function (element) {
      return (
        secondArray.findIndex(function (assigner) {
          return element.email === assigner.email;
        }) > -1
      );
    });
  }
  return firstArray.every(function (element, index) {
    return element === secondArray[index];
  });
}
export default {
  isClientSide: isClientSide,
  isMobile: isMobile,
  getAvatarName: getAvatarName,
  capitalizeLetter: capitalizeLetter,
  validateEmail: validateEmail,
  debounce: debounce,
  serializeAssigners: serializeAssigners,
  compareArrayByElement: compareArrayByElement,
};
//# sourceMappingURL=common.js.map
