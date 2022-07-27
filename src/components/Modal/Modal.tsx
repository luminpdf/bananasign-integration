import {ReactNode, useEffect, useMemo} from 'react';

import {ModalName, ModalOptions, usePopup} from '@src/components/CustomModal';
import AddSignerViewerModal from '@src/components/InviteToSign/AddSignerViewerModal';
import WarningModal from '@src/components/InviteToSign/WarningModal';

const ModalWrapper = ({children}: {children: ReactNode}) => (
  <div className="ModalWrapper__container">{children}</div>
);

const ModalBackdrop = () => {
  useEffect(() => {
    document.body.classList.add('react-custom-modal-open');
    return () => {
      document.body.classList.remove('react-custom-modal-open');
    };
  }, []);

  return <div className="ModalBackdrop__container" />;
};
interface IProps {
  componentProps: ModalOptions;
}

const Modal = ({componentProps}: IProps) => {
  const {modalName} = componentProps;
  if (!modalName) return null;

  const content: ReactNode = useMemo(() => {
    switch (modalName) {
      case ModalName.ADD_VIEWERS_SIGNERS:
        return <AddSignerViewerModal />;
      case ModalName.WARNING:
        return <WarningModal />;
      default:
        return null;
    }
  }, [modalName]);

  return (
    <ModalWrapper>
      <ModalBackdrop />
      {content}
    </ModalWrapper>
  );
};

const ModalHOC = () => {
  const [{componentProps}] = usePopup();

  return <Modal componentProps={componentProps as ModalOptions} />;
};

export default ModalHOC;
