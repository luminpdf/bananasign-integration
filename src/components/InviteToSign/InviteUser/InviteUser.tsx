import axios from 'axios';

import './InviteUser.style.scss';

import classNames from 'classnames';
import React, {useContext, useEffect, useState} from 'react';

import {Images} from '@src/assets';
import {usePopup} from '@src/components/CustomModal';
import {ModalName, ModalOptions} from '@src/components/CustomModal';
import {REQUEST_TYPE, API_VERSION, API_HANDLER} from '@src/constants/common';
import common from '@src/utils/common';

import Button from '@components/Button';

import {IAssignerProps} from '../InviteToSign.interface';
import InviteToSignContext from '../InviteToSignContext';
import {InviteToSignContextActions} from '../InviteToSignContextActions';
import AssignerItem from './AssignerItem';

const InviteUser: React.FC = () => {
  const isMobile = common.isMobile();
  const context = useContext(InviteToSignContext);
  const {
    state: {
      signers,
      viewers,
      isOpenAddAssignerModal,
      cancelAddAssigners,
      loading,
      flowId,
      bananasignBaseUrl,
      accessToken,
    },
    dispatch,
  } = context;
  const [signersState, setSignersState] = useState<IAssignerProps[]>([]);
  const [viewersState, setViewersState] = useState<IAssignerProps[]>([]);

  const [{showModal}] = usePopup();

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
    //
    const modalOptions: ModalOptions = {
      modalName: ModalName.ADD_VIEWERS_SIGNERS,
    };

    showModal(modalOptions);
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
      const endPoint = `${bananasignBaseUrl}/${API_VERSION}/${API_HANDLER}`;

      axios({
        method: 'PUT',
        url: `${endPoint}/create-document-temporary`,
        data: {
          signers: signers.map((signer) => ({
            email: signer.email,
            name: signer.name,
          })),
          viewers: viewers.map((viewer) => ({
            email: viewer.email,
            name: viewer.name,
          })),
          flowId,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      })
        .then((_) => {
          dispatch(InviteToSignContextActions.OPEN_BANANASIGN_IFRAME(true));
        })
        .catch((_) => console.log('Information cannot be saved'));
    } catch (error) {
      console.warn('Cannot load bananasign service');
    }
  };

  return (
    <div className="InviteUser__container">
      {!isMobile && <h1 className="InviteUser__title">Invite people</h1>}
      <div className="InviteUser__wrapper">
        <h2 className="InviteUser__wrapper-title">
          Who needs to Sign?<span> *</span>
        </h2>
        <div className="InviteUser__wrapper-add-user">
          <div
            className={classNames(
              'InviteUser__wrapper-user-list signers-list',
              {
                hide_border: !signersState.length,
              },
            )}
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
            className={classNames(
              'InviteUser__wrapper-user-list viewers-list',
              {
                hide_border: !viewersState.length,
              },
            )}
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
