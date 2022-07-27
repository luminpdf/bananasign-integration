import {ReactNode, useCallback, useEffect, useState} from 'react';

import {ModalOptions, usePopup} from '@src/components/CustomModal';

const AnimatedModal = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  const [{componentProps}] = usePopup();
  const [animation, setAnimation] = useState<{in: string; out: string}>({
    in: '',
    out: '',
  });
  const {animationType, outAnimationType, modalName} =
    componentProps as ModalOptions;

  const hideMe = useCallback(() => {
    setAnimation({
      out: `animate__animated animate__${outAnimationType} animate__faster`,
      in: '',
    });
  }, [outAnimationType]);

  const showMe = useCallback(() => {
    setAnimation({
      out: '',
      in: `animate__animated animate__${animationType} animate__faster`,
    });
  }, [animationType]);

  useEffect(() => {
    if (modalName) {
      return showMe();
    }
    return hideMe();
  }, [modalName]);

  return (
    <div className={`${className} ${animation.in || animation.out}`}>
      {children}
    </div>
  );
};

AnimatedModal.propTypes = {};

export default AnimatedModal;
