import './SearchContact.style.scss';

import classNames from 'classnames';
import React, {useCallback, useContext} from 'react';

import {GUEST_USER, REQUEST_TYPE} from '@src/constants/common';

import {IAssignerProps} from '../../InviteToSign.interface';
import InviteToSignContext from '../../InviteToSignContext';
import {InviteToSignContextActions} from '../../InviteToSignContextActions';
import AssignerItem from '../../InviteUser/AssignerItem';
import {ISearchContractProps} from './SearchContact.interface';

// import EmptySearchContactResults from './EmptySearchContactResults';
// import SearchContactEmptyKeyWords from './SearchContactEmptyKeyWords';

const SearchContact = React.forwardRef<HTMLDivElement, ISearchContractProps>(
  (props, ref) => {
    const {active, resetInput} = props;
    const {
      state: {searchContacts, signers, viewers, type, search},
      dispatch,
    } = useContext(InviteToSignContext);

    const existedUser = useCallback(
      (contact: IAssignerProps) => {
        return (
          [...signers, ...viewers].findIndex(
            (user) => user.email === contact.email,
          ) > -1
        );
      },
      [signers, viewers],
    );

    const addContactAssignUser = (assignUser: IAssignerProps) => {
      if (existedUser(assignUser)) {
        return false;
      }
      const newAssignUser = {newAssignUser: true};
      if (type === REQUEST_TYPE.VIEWER) {
        dispatch(
          InviteToSignContextActions.ADD_VIEWER({
            ...assignUser,
            ...newAssignUser,
            name: assignUser?.name || GUEST_USER,
            requestType: 'VIEWER',
          }),
        );
      } else if (type === REQUEST_TYPE.SIGNER) {
        dispatch(
          InviteToSignContextActions.ADD_SIGNER({
            ...assignUser,
            ...newAssignUser,
            name: assignUser?.name || GUEST_USER,
            requestType: 'SIGNER',
          }),
        );
      }
      if (resetInput && typeof resetInput === 'function') {
        resetInput();
      }
      return true;
    };

    const renderContent = () => {
      const contacts = search?.searchData || searchContacts;
      if (contacts.length > 0) {
        return (
          <div className="SearchContact__list">
            {contacts.map((contact: IAssignerProps, index: number) => {
              return (
                <AssignerItem
                  onClick={addContactAssignUser}
                  key={index}
                  user={contact}
                  showIconTrash={false}
                  className="SearchContact__item"
                  disabled={existedUser(contact)}
                />
              );
            })}
          </div>
        );
      }
      return null;
    };

    return (
      <div
        className={classNames('SearchContact__container', {active: active})}
        ref={ref}
      >
        {renderContent()}
      </div>
    );
  },
);

SearchContact.displayName = 'SearchContact';
SearchContact.defaultProps = {
  active: false,
  resetInput: () => undefined,
};

export default SearchContact;
