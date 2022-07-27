import './AssignerItem.style.scss';

import classNames from 'classnames';
import React, {useContext, useEffect, useRef, useState} from 'react';

import {Images} from '@src/assets';
import Avatar from '@src/components/Avatar';
import {GUEST_USER} from '@src/constants/common';
import common from '@src/utils/common';

import InviteToSignContext from '../../InviteToSignContext';
import {IAssignerItemProps} from './AssignerItem.interface';

const TOOLTIP_CONTENT = {
  signer: 'Change my role to viewer',
  viewer: 'Change my role to signer',
};

const OFFSET_POSITION_TOOLTIP_OWNER = 75;
const OFFSET_POSITION_TOOLTIP = 35;

const AssignerItem: React.FC<IAssignerItemProps> = (props) => {
  const isMobile = common.isMobile();

  const {
    user,
    className,
    showIconTrash,
    onClick,
    onRemoveUser,
    role,
    disabled,
  } = props;

  const {
    state: {isOpen},
  } = useContext(InviteToSignContext);
  const isGuestUser = user?.name === GUEST_USER;
  const isOwner = user?.isOwner;
  // const invalidStatus = user.newAssignUser;
  const handleClick = () => {
    if (onClick && typeof onClick === 'function') {
      onClick(user);
    }
  };

  const handleRemoveUser = () => {
    if (onRemoveUser && typeof onRemoveUser === 'function') {
      onRemoveUser(user);
    }
  };

  const dataToolTip = isOwner
    ? TOOLTIP_CONTENT[role as string] || 'signer'
    : `Remove ${role}`;

  const [offset, setOffset] = useState({top: 0, left: 0});

  const trashRef = useRef<HTMLDivElement>(null);
  const signersContainer: HTMLDivElement | null =
    document.querySelector('.signers-list');
  const viewersContainer: HTMLDivElement | null =
    document.querySelector('.viewers-list');

  const container = {
    viewer: viewersContainer,
    signer: signersContainer,
  };

  useEffect(() => {
    const assignerRole = role || 'viewer';
    const elContainer = container[assignerRole] as HTMLDivElement;

    const onScroll = () => {
      const trashRect = trashRef?.current?.getBoundingClientRect() as DOMRect;
      const trashLeft = trashRect?.x;
      const elContainerRect = elContainer.getBoundingClientRect();

      const top = trashRect?.bottom || 0;
      const y = Math.min(elContainerRect.bottom, top);
      const offset = isOwner
        ? OFFSET_POSITION_TOOLTIP_OWNER
        : OFFSET_POSITION_TOOLTIP;

      setOffset({
        left: trashLeft - offset,
        top: y,
      });
    };

    elContainer?.addEventListener('scroll', onScroll);
    elContainer?.addEventListener('transitionstart', onScroll);

    return () => {
      elContainer?.removeEventListener('scroll', onScroll);
      elContainer?.removeEventListener('transitionstart', onScroll);
    };
  }, [trashRef, role, isOpen]);

  return (
    <div
      onClick={handleClick}
      className={classNames(`AssignerItem__container ${className}`, {
        disabled: disabled,
      })}
    >
      <div className="AssignerItem__wrapper">
        <Avatar user={user} className="AssignerItem__wrapper-avatar" />
        <div className="AssignerItem__wrapper-name">
          <p>
            {isGuestUser ? 'Guest User' : user.name} {isOwner && '(Owner)'}
          </p>
          <p>{user.email}</p>
        </div>
      </div>
      {showIconTrash && (
        <div
          ref={trashRef}
          onClick={handleRemoveUser}
          data-tip={dataToolTip}
          className="AssignerItem__delete-button"
        >
          <img
            src={isOwner ? Images.icon_repeat : Images.icon_trash}
            alt="delete icon"
          />

          {!isMobile && (
            <div
              className="AssignerItem__tooltip place-bottom"
              style={{
                top: `${offset.top}px`,
                left: `${offset.left}px`,
              }}
            >
              {dataToolTip}
            </div>
          )}
        </div>
      )}
      {disabled && (
        <span className="AssignerItem__user-info-text--added">Added</span>
      )}
    </div>
  );
};

AssignerItem.defaultProps = {
  className: '',
  showIconTrash: true,
  onClick: () => undefined,
  role: 'viewer',
  disabled: false,
};

export default AssignerItem;
