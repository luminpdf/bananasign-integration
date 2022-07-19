import './InputAssigner.style.scss';

import classNames from 'classnames';
import React, {useContext, useImperativeHandle, useRef, useState} from 'react';

import {Images} from '@src/assets';
import CustomInput from '@src/components/CustomInput';
import {ICustomInputRef} from '@src/components/CustomInput/CustomInput.interface';
import {CONTACT_TYPE, GUEST_USER, REQUEST_TYPE} from '@src/constants/common';
import common from '@src/utils/common';

import InviteToSignContext from '../../InviteToSignContext';
import {InviteToSignContextActions} from '../../InviteToSignContextActions';
import AssignerListInput from './AssignerListInput/AssignerListInput';
import {
  IInputAssignerProps,
  IInputAssignerRef,
} from './InputAssigner.interface';

const InputAssigner = React.forwardRef<IInputAssignerRef, IInputAssignerProps>(
  (props, ref) => {
    const {
      state: {searchContacts, signers, viewers, type},
      dispatch,
    } = useContext(InviteToSignContext);
    const {onFocus, onBlur, isOpenSearch} = props;
    const [email, setEmail] = useState('');
    const customInputRef = useRef<ICustomInputRef>(null);
    const assignUsers = type === REQUEST_TYPE.SIGNER ? signers : viewers;
    const assignUsersAdded = assignUsers.filter((user) => !user.isOwner);

    useImperativeHandle(ref, () => ({
      unFocusInput: () => customInputRef?.current?.unFocus(),
      resetInput: () => {
        customInputRef?.current?.reset();
        setEmail('');
        dispatch(InviteToSignContextActions.SET_SEARCH_CONTACTS([]));
        dispatch(InviteToSignContextActions.SET_WORD_SEARCH_CONTACT(''));
      },
    }));

    const handleSearchContactByEmail = common.debounce((keyWords: string) => {
      if (!common.validateEmail(keyWords)) {
        return false;
      }

      const contactList = [
        {
          name: GUEST_USER,
          avatarRemoteId: '',
          email: keyWords,
          type: CONTACT_TYPE.GUEST,
          userId: '',
        },
      ];

      dispatch(InviteToSignContextActions.SET_SEARCH_CONTACTS(contactList));
      dispatch(InviteToSignContextActions.SET_WORD_SEARCH_CONTACT(keyWords));
      return true;
    }, 300);

    const isEmptyAssignUsers =
      Array.isArray(assignUsersAdded) && assignUsersAdded.length === 0;

    const _handleInputChange = (value: string) => {
      dispatch(InviteToSignContextActions.SET_WORD_SEARCH_CONTACT(value));
      handleSearchContactByEmail(value);
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value || '');
      _handleInputChange(e.target.value || '');

      if (searchContacts.length > 0) {
        dispatch(InviteToSignContextActions.SET_SEARCH_CONTACTS([]));
      }
    };

    return (
      <div
        className={classNames('InputAssigner__container', {
          isOpenSearch: isOpenSearch,
          EmptyAssignUsers: isEmptyAssignUsers,
        })}
      >
        {!isEmptyAssignUsers && (
          <>
            <AssignerListInput />
            <div className="InputAssigner__divider" />
          </>
        )}
        <CustomInput
          ref={customInputRef}
          name="name"
          fullWidth
          value={email}
          icon={Images.icon_search}
          type="email"
          onChange={handleChangeInput}
          placeholder="Enter email address"
          minLength={1}
          maxLength={254}
          onFocus={onFocus}
          onBlur={onBlur}
          classWrapper="InputAssigner__wrapper--input"
          className="InputAssigner__input"
          showClearButton
        />
      </div>
    );
  },
);

InputAssigner.displayName = 'InputAssigner';

InputAssigner.defaultProps = {
  onFocus: () => undefined,
  onBlur: () => undefined,
  isOpenSearch: false,
};

export default InputAssigner;
