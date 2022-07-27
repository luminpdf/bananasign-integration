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
import {jsx as _jsx} from 'react/jsx-runtime';
import {useCallback, useEffect, useState} from 'react';
import {usePopup} from '@src/components/CustomModal';
var AnimatedModal = function (_a) {
  var children = _a.children,
    className = _a.className;
  var componentProps = usePopup()[0].componentProps;
  var _b = useState({
      in: '',
      out: '',
    }),
    animation = _b[0],
    setAnimation = _b[1];
  var _c = componentProps,
    animationType = _c.animationType,
    outAnimationType = _c.outAnimationType,
    modalName = _c.modalName;
  var hideMe = useCallback(
    function () {
      setAnimation({
        out: 'animate__animated animate__'.concat(
          outAnimationType,
          ' animate__faster',
        ),
        in: '',
      });
    },
    [outAnimationType],
  );
  var showMe = useCallback(
    function () {
      setAnimation({
        out: '',
        in: 'animate__animated animate__'.concat(
          animationType,
          ' animate__faster',
        ),
      });
    },
    [animationType],
  );
  useEffect(
    function () {
      if (modalName) {
        return showMe();
      }
      return hideMe();
    },
    [modalName],
  );
  return _jsx(
    'div',
    __assign(
      {
        className: ''
          .concat(className, ' ')
          .concat(animation.in || animation.out),
      },
      {children: children},
    ),
  );
};
AnimatedModal.propTypes = {};
export default AnimatedModal;
//# sourceMappingURL=AnimatedModal.js.map
