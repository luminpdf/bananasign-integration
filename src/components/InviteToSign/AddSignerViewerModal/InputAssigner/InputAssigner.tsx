import './InputAssigner.style.scss';

import classNames from 'classnames';
import React, {useImperativeHandle, useRef, useState} from 'react';

import {Images} from '@src/assets';
import CustomInput from '@src/components/CustomInput';
import {ICustomInputRef} from '@src/components/CustomInput/CustomInput.interface';

import AssignerListInput from './AssignerListInput/AssignerListInput';
// import { AssignModalActions, AssignModalContext } from '../AssignModal';
// import AssignerListInput from '../AssignerListInput';
import {IInputAssignerProps} from './InputAssigner.interface';

// import { REQUEST_TYPE } from '@src/constants/common';

// const GUEST_USER = 'Guest User';

const InputAssigner: React.FC<IInputAssignerProps> = React.forwardRef(
  (props, ref) => {
    //   const { state: { signers, viewers, type, searchContacts, contextView }, dispatch } = useContext(AssignModalContext);
    const {onFocus, onBlur, isOpenSearch} = props;
    const [email, setEmail] = useState('');
    const customInputRef = useRef<ICustomInputRef>(null);
    //   const assignUsers = type === REQUEST_TYPE.SIGNER ? signers : viewers;
    //   const [currentUser, currentContract] = useSelector(
    //     state => [selectors.getCurrentUser(state), selectors.getCurrentContract(state)],
    //     shallowEqual,
    //   );

    useImperativeHandle(ref, () => ({
      unFocusInput: () => customInputRef?.current?.unFocus(),
      resetInput: () => {
        customInputRef?.current?.reset();
        setEmail('');
        //   dispatch(AssignModalActions.SET_CONTEXT_DATA({
        //     searchContacts: [],
        //     totalSearchContacts: 0,
        //     keyWordSearchContact: '',
        //   }));
      },
    }));

    //   const isEmptyAssignUsers = Array.isArray(assignUsers) && assignUsers.length === 0;
    //   const isOwner = true;
    //   const isAddViewerSigning = contextView?.state?.currentScreen === DOCUMENT_SCREENS.SIGN_SUCCESS || contextView?.state?.isAddViewerAfterSign;
    // check empty add viewer for signer after signing
    //   const isEmptyAssignUsersAfterSigning = isAddViewerSigning && !assignUsers.filter(assigner => assigner?.newAssignUser).length;

    const _handleInputChange = (value: string) => {
      console.log({value});
      // dispatch(AssignModalActions.SET_CONTEXT_DATA({
      //   keyWordSearchContact: value,
      //   loading: true
      // }))
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value || '');
      _handleInputChange(e.target.value || '');
      // if (searchContacts.length > 0) {
      //   dispatch(AssignModalActions.SET_CONTEXT_DATA({
      //     searchContacts: [],
      //     totalSearchContacts: 0
      //   }))
      // }
    };

    return (
      <div
        className={classNames('InputAssigner__container', {
          isOpenSearch: isOpenSearch,
          //   'EmptyAssignUsers': isEmptyAssignUsers || isEmptyAssignUsersAfterSigning,
          //   'EmptyAssignUsers': isEmptyAssignUsers,
        })}
      >
        <AssignerListInput />
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
