import './InviteUser.style.scss';

import classNames from 'classnames';
import React, {useContext, useEffect, useState} from 'react';

import {Images} from '@src/assets';
import {REQUEST_TYPE} from '@src/constants/common';

import Button from '@components/Button';

import {IAssignerProps, IGetIdentify} from '../InviteToSign.interface';
import InviteToSignContext from '../InviteToSignContext';
import {InviteToSignContextActions} from '../InviteToSignContextActions';
import AssignerItem from './AssignerItem';

const InviteUser: React.FC = () => {
  const context = useContext(InviteToSignContext);
  const {
    state: {
      signers,
      viewers,
      isOpenAddAssignerModal,
      cancelAddAssigners,
      saveDocumentInfo,
      loading,
    },
    dispatch,
  } = context;
  const [signersState, setSignersState] = useState<IAssignerProps[]>([]);
  const [viewersState, setViewersState] = useState<IAssignerProps[]>([]);

  useEffect(() => {
    if (isOpenAddAssignerModal) {
      return;
    }
    if (cancelAddAssigners) {
      dispatch(InviteToSignContextActions.SET_SIGNERS(signersState));
      dispatch(InviteToSignContextActions.SET_VIEWERS(viewersState));
      dispatch(InviteToSignContextActions.CANCEL_ADD_ASSIGNERS(false));
    } else {
      setSignersState(signers);
      setViewersState(viewers);
    }
  }, [isOpenAddAssignerModal, signers, viewers]);

  const handleOpenAddAssignerModal = (type: string) => {
    dispatch(InviteToSignContextActions.SET_REQUEST_TYPE(type));
    dispatch(InviteToSignContextActions.SET_OPEN_ADD_ASSIGNER_MODAL(true));
  };

  const handleRemoveSigner = (user: IAssignerProps) => {
    dispatch(InviteToSignContextActions.REMOVE_SIGNER(user));
    if (user?.isOwner) {
      dispatch(InviteToSignContextActions.SET_VIEWERS([user, ...viewers]));
    }
  };

  const handleRemoveViewer = (user: IAssignerProps) => {
    dispatch(InviteToSignContextActions.REMOVE_VIEWER(user));
    if (user?.isOwner) {
      dispatch(InviteToSignContextActions.SET_SIGNERS([user, ...signers]));
    }
  };

  const handleNext = async () => {
    if (loading) {
      return;
    }
    dispatch(InviteToSignContextActions.SET_LOADING(true));
    try {
      const result: IGetIdentify = await saveDocumentInfo({
        signers,
        viewers,
      });
      const {identify} = result;
      if (identify) {
        dispatch(InviteToSignContextActions.SET_IDENTIFY(identify));
        dispatch(InviteToSignContextActions.OPEN_BANANASIGN_IFRAME(true));
      }
    } catch (error) {
      console.log({error});
    } finally {
      dispatch(InviteToSignContextActions.SET_LOADING(false));
    }
  };

  return (
    <div className="InviteUser__container">
      <h1 className="InviteUser__title">Invite people</h1>
      <div className="InviteUser__wrapper">
        <h2 className="InviteUser__wrapper-title">
          Who needs to Sign?<span> *</span>
        </h2>
        <div className="InviteUser__wrapper-add-user">
          <div
            className={classNames('InviteUser__wrapper-user-list', {
              hide_border: !signersState.length,
            })}
          >
            {signersState.map((signer: IAssignerProps, index: number) => (
              <AssignerItem
                key={signer?.email + '' + index}
                user={signer}
                onRemoveUser={handleRemoveSigner}
                role="signer"
              />
            ))}
          </div>
          <Button
            onClick={() => handleOpenAddAssignerModal(REQUEST_TYPE.SIGNER)}
            className="InviteUser__wrapper-add-button"
            isRippleEffect
            title="Add Signer"
            icon={Images.icon_sign}
          />
        </div>
        <h2 className="InviteUser__wrapper-title">Who needs to View?</h2>
        <div className="InviteUser__wrapper-add-user">
          <div
            className={classNames('InviteUser__wrapper-user-list', {
              hide_border: !viewersState.length,
            })}
          >
            {viewersState.map((viewer: IAssignerProps, index: number) => (
              <AssignerItem
                key={viewer?.email + '' + index}
                user={viewer}
                onRemoveUser={handleRemoveViewer}
                role="viewer"
              />
            ))}
          </div>
          <Button
            onClick={() => handleOpenAddAssignerModal(REQUEST_TYPE.VIEWER)}
            className="InviteUser__wrapper-add-button"
            isRippleEffect
            title="Add Viewer"
            icon={Images.icon_show}
          />
        </div>
        <Button
          className="InviteUser__next-button"
          isRippleEffect
          title="Next"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default InviteUser;
