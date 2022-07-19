import './AssignerListInput.style.scss';

import classNames from 'classnames';
import React from 'react';
import {useContext, useEffect, useRef} from 'react';
import {animated, useTransition} from 'react-spring';

import {Images} from '@src/assets';
import {IAssignerProps} from '@src/components/InviteToSign/InviteToSign.interface';
import InviteToSignContext from '@src/components/InviteToSign/InviteToSignContext';
import {InviteToSignContextActions} from '@src/components/InviteToSign/InviteToSignContextActions';
import {REQUEST_TYPE} from '@src/constants/common';

const AssignerListInput: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const maxSigners = useRef(0);
  const context = useContext(InviteToSignContext);
  const {
    state: {signers, viewers, type},
    dispatch,
  } = context;
  const assignUsers = type === REQUEST_TYPE.SIGNER ? signers : viewers;
  const assignUsersAdded = assignUsers.filter((user) => !user.isOwner);
  const transition = useTransition(assignUsersAdded, {
    from: {x: 0, opacity: 0},
    enter: {opacity: 1, x: 0},
    leave: {opacity: 0, x: 0, width: 0},
  });

  useEffect(() => {
    if (divRef.current) {
      if (maxSigners.current < assignUsersAdded.length) {
        divRef.current.scrollIntoView({behavior: 'smooth'});
      }
      maxSigners.current = assignUsersAdded.length;
    }
  }, [assignUsersAdded]);

  const onRemoveAssigner = (assigner: IAssignerProps) => {
    if (type === REQUEST_TYPE.SIGNER) {
      dispatch(InviteToSignContextActions.REMOVE_SIGNER(assigner));
    } else {
      dispatch(InviteToSignContextActions.REMOVE_VIEWER(assigner));
    }
  };

  const handleRemoveClick = (assigner: IAssignerProps) => {
    onRemoveAssigner(assigner);
  };

  const assignedEmailItems = transition((style, item, _, index) => {
    const isDisable = item?.isOwner;

    return (
      <animated.div
        className="AssignerListInput__row-email"
        style={style}
        key={index}
      >
        <span
          className={classNames('AssignerListInput__email', {
            disabled: isDisable,
          })}
        >
          {item.email}
        </span>
        <div
          onClick={() => handleRemoveClick(item)}
          className={classNames('AssignerListInput__icon-right', {
            hidden: isDisable,
          })}
        >
          <img src={Images.icon_close} alt="icon remove" />
        </div>
      </animated.div>
    );
  });

  return (
    <div className="AssignerListInput__container">
      {assignedEmailItems}
      <div ref={divRef} />
    </div>
  );
};

export default AssignerListInput;
