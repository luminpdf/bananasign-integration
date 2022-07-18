import './AssignerListInput.style.scss';

import classNames from 'classnames';
import React from 'react';
import {useContext, useEffect, useRef} from 'react';
import {animated, useTransition} from 'react-spring';

import {Images} from '@src/assets';
import InviteToSignContext, {
  IAssignerProps,
} from '@src/components/InviteToSign/InviteToSignContext';
// import { InviteToSignContextActions } from '@src/components/InviteToSign/InviteToSignContextActions';
import {CONTACT_TYPE, REQUEST_TYPE} from '@src/constants/common';

/**
 * opening: upload, add recipients, request to sign
 */
const AssignerListInput: React.FC = () => {
  const divRef = useRef(null);
  const maxSigners = useRef(0);
  const context = useContext(InviteToSignContext);
  const {
    state: {signers, viewers, type},
  } = context;
  const assignUsers = type === REQUEST_TYPE.SIGNER ? signers : viewers;
  const transition = useTransition(assignUsers, {
    from: {x: 0, opacity: 0},
    enter: {opacity: 1, x: 0},
    leave: {opacity: 0, x: 0, width: 0},
  });

  useEffect(() => {
    if (divRef.current) {
      if (maxSigners.current < assignUsers.length) {
        // divRef.current.scrollIntoView({ behavior: "smooth" });
      }
      maxSigners.current = assignUsers.length;
    }
  }, [assignUsers]);

  //   const onRemoveAssigner = (assigner: IAssignerProps) => {
  //     if (type === REQUEST_TYPE.SIGNER) {
  //       dispatch(InviteToSignContextActions.REMOVE_SIGNER(assigner.email || ''));
  //     } else {
  //       dispatch(InviteToSignContextActions.REMOVE_VIEWER(assigner.email || ''));
  //     }
  //   }

  const onPushContact = (assigner: IAssignerProps) => {
    if (assigner.type === CONTACT_TYPE.RECENT) {
      console.log({assigner});
      //   dispatch(InviteToSignContextActions.ADD_RECENT_CONTACT(assigner));
      // } else {
      //   dispatch(InviteToSignContextActions.ADD_GOOGLE_CONTACT(assigner));
    }
  };

  const handleRemoveClick = (assigner: IAssignerProps) => {
    console.log({assigner});
    // onRemoveAssigner(assigner);
    onPushContact(assigner);
  };

  //   const isAddViewerSigning = contextView?.state?.currentScreen === DOCUMENT_SCREENS.SIGN_SUCCESS || contextView?.state?.isAddViewerAfterSign;

  const assignedEmailItems = transition((style, item, _, index) => {
    // const isDisable = item?.isOwner || item?.requiredPermissions === REQUEST_TYPE.VIEWER;
    // if (isAddViewerSigning && !item?.newAssignUser && type === REQUEST_TYPE.VIEWER) {
    //   return null;
    // }
    const isDisable = false;

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
          {/* <Icomoon className="cancel" size={12} disabled={isDisable} onClick={() => handleRemoveClick(item)} /> */}
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
