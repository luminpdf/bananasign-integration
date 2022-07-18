import './SearchContact.style.scss';

// import {REQUEST_TYPE} from '@src/constants/common';
import classNames from 'classnames';
// import PropTypes from 'prop-types';
import React from 'react';

// import InviteToSignContext, {IAssignerProps} from '../../InviteToSignContext';
import AssignerItem from '../../InviteUser/AssignerItem';
// import { AssignModalActions, AssignModalContext } from '../AssignModal';
// import UserItemContactSkeleton from '../UserItemContactSkeleton';
// import SearchContactEmptyKeyWords from 'src/bananasign/SearchContactEmptyKeyWords';
// import EmptySearchContactResults from 'src/bananasign/EmptySearchContactResults';
import {IContact, ISearchContractProps} from './SearchContact.interface';

const SearchContact = React.forwardRef<HTMLDivElement, ISearchContractProps>(
  (props, ref) => {
    const {active, resetInput} = props;
    console.log({resetInput});
    //   const { state: { type, signers, viewers, loading }, dispatch } = useContext(InviteToSignContext);
    const searchContacts = [{email: 'hahah'}, {email: 'kkkk'}];
    //   const existedUser = useCallback((contact) => {
    //     return [...signers, ...viewers].findIndex(user => user.email === contact.email) > -1
    //   }, [signers, viewers]);

    //   const addContactAssignUser = (assignUser: IAssignerProps) => {
    //     if (existedUser(assignUser)) {
    //       return false;
    //     }
    //     const newAssignUser = { newAssignUser: true };
    //     if (type === REQUEST_TYPE.VIEWER) {
    //     //   dispatch(AssignModalActions.ADD_VIEWER({ ...assignUser, ...newAssignUser }));
    //     } else if (type === REQUEST_TYPE.SIGNER) {
    //     //   dispatch(AssignModalActions.ADD_SIGNER({ ...assignUser, ...newAssignUser }));
    //     }
    //     dispatch(AssignModalActions.REMOVE_SEARCH_CONTACT(assignUser));
    //     if (resetInput && typeof resetInput === 'function') {
    //       resetInput();
    //     }
    //     return true;
    //   }

    const renderContent = () => {
      // if (loading) {
      //   return <UserItemContactSkeleton />
      // }

      // if (!keyWordSearchContact) {
      //   return <SearchContactEmptyKeyWords />;
      // }
      // if (Boolean(keyWordSearchContact) && searchContacts.length === 0) {
      //   return <EmptySearchContactResults keyWords={keyWordSearchContact}/>
      // }
      if (searchContacts.length > 0) {
        return (
          <div className="SearchContact__list">
            {searchContacts.map((_contact: IContact, _index: number) => {
              return (
                <AssignerItem />
                //   <UserItem
                //     key={((contact?.email || '') + index).toString()}
                //     user={contact}
                //     isShowTrash={false}
                //     onClick={() => addContactAssignUser(contact)}
                //     showUserName
                //     added={existedUser(contact)}
                //   />
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
