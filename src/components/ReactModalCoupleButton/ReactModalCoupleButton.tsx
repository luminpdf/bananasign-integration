import './ReactModalCoupleButton.style.scss';

import React from 'react';

import Button from '@src/components/Button';
import {BUTTON_TYPE} from '@src/constants/common';

import {ICoupleButtonProps} from './ReactModalCoupleButton.interface';

const ReactModalCoupleButton: React.FC<ICoupleButtonProps> = (props) => {
  const {
    onCancel,
    onConfirm,
    primaryTitle,
    secondaryTitle,
    disabledConfirmButton,
    className,
  } = props;
  return (
    <div className={`ReactModalCoupleButton__container ${className}`}>
      <Button
        className="ReactModal__Button"
        isRippleEffect
        title={secondaryTitle}
        onClick={onCancel}
        buttonType={BUTTON_TYPE.TERTIARY}
      />
      <Button
        className="ReactModal__Button"
        isRippleEffect
        title={primaryTitle}
        onClick={onConfirm}
        disabled={disabledConfirmButton}
        buttonType={BUTTON_TYPE.PRIMARY_YELLOW}
      />
    </div>
  );
};

ReactModalCoupleButton.defaultProps = {
  disabledConfirmButton: false,
  primaryTitle: 'Done',
  secondaryTitle: 'Cancel',
  className: '',
};

export {ReactModalCoupleButton};
