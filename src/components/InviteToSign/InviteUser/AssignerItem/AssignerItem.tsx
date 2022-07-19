import './AssignerItem.style.scss';

import classNames from 'classnames';
import React, {useContext} from 'react';
import ReactTooltip from 'react-tooltip';

import {Images} from '@src/assets';
import Avatar from '@src/components/Avatar';
import {GUEST_USER} from '@src/constants/common';

import InviteToSignContext from '../../InviteToSignContext';
import {InviteToSignContextActions} from '../../InviteToSignContextActions';
import {IAssignerItemProps} from './AssignerItem.interface';

const getTooltipContent = (role: string) =>
  ({
    signer: 'Change my role to viewer',
    viewer: 'Change my role to signer',
  }[role]);

const AssignerItem: React.FC<IAssignerItemProps> = (props) => {
  const context = useContext(InviteToSignContext);
  const {dispatch} = context;
  const {
    user,
    className,
    showIconTrash,
    onClick,
    onRemoveUser,
    role,
    disabled,
  } = props;
  const isGuestUser = user?.name === GUEST_USER;
  const isOwner = user?.isOwner;
  // const invalidStatus = user.newAssignUser;
  const handleClick = () => {
    if (onClick && typeof onClick === 'function') {
      onClick(user);
    }
  };

  const handleRemoveUser = () => {
    ReactTooltip.hide();
    if (onRemoveUser && typeof onRemoveUser === 'function') {
      onRemoveUser(user);
    }

    if (isOwner) {
      if (role === 'signer') {
        dispatch(InviteToSignContextActions.ADD_VIEWER(user));
      } else {
        dispatch(InviteToSignContextActions.ADD_SIGNER(user));
      }
    }
  };

  const dataToolTip = isOwner
    ? getTooltipContent(role || 'signer')
    : `Remove ${role}`;

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
          onClick={handleRemoveUser}
          data-tip={dataToolTip}
          className="AssignerItem__delete-button"
        >
          <img
            src={isOwner ? Images.icon_repeat : Images.icon_trash}
            alt="delete icon"
          />
          <ReactTooltip
            offset={{top: 4}}
            effect="solid"
            arrowColor="transparent"
            place="bottom"
            className="AssignerItem__tooltip"
          />
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
  role: '',
  disabled: false,
};

export default AssignerItem;
