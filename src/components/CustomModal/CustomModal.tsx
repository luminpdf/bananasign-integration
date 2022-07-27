import './CustomModal.style.scss';

import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from 'react';

export enum AnimationType {
  FADE_IN = 'fadeIn',
  FADE_IN_UP = 'fadeInUp',
  FLASH = 'flash',
  HEART_BEAT = 'heartBeat',
  SLIDE_IN_LEFT = 'slideInLeft',
  SLIDE_IN_RIGHT = 'slideInRight',
  SLIDE_IN_UP = 'slideInUp',
  SWING = 'swing',
  ZOOM_IN = 'zoomIn',
}

export enum OutAnimationType {
  FADE_OUT = 'fadeOut',
  SLIDE_OUT_LEFT = 'slideOutLeft',
  SLIDE_OUT_RIGHT = 'slideOutRight',
  SLIDE_OUT_UP = 'slideOutUp',
  ZOOM_OUT = 'zoomOut',
}

export enum ModalType {
  WARNING = 'warning',
  INFO = 'info',
  DANGER = 'danger',
  SUCCESS = 'success',
  CUSTOM = 'custom',
}

export interface OptionDialogButton {
  name: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: 'confirm' | 'cancel';
}

export enum ModalName {
  WARNING = 'WARNING',
  ADD_VIEWERS_SIGNERS = 'ADD_VIEWERS_SIGNERS',
}

export enum ModalActions {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
}

export enum ModalSettingType {
  ONLY_ONE_SIGNER_IS_OWNER = 'ONLY_ONE_SIGNER_IS_OWNER',
  CANCEL_PROGRESS = 'CANCEL_PROGRESS',
}

export interface ModalSettings {
  type: ModalSettingType;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export interface ModalOptions {
  type?: ModalType;
  modalName?: ModalName;
  animationType?: AnimationType;
  outAnimationType?: OutAnimationType;
  timeoutDuration?: number;
  allowOutsideClick?: boolean;
  allowCloseOnEscKey?: boolean;
  settings?: ModalSettings;
}

interface PopupContext {
  componentProps?: ModalOptions;
  showModal: (options: ModalOptions) => void;
  hideModal: () => void;
}

const DefaultPopupActions: PopupContext = {
  showModal: (_options: ModalOptions) => null,
  hideModal: () => null,
};

type IModalState = {
  componentProps?: ModalOptions;
  showModal: (options: ModalOptions) => void;
  hideModal: () => void;
};

export type ActionPayloadMap = {
  OPEN: ModalOptions;
  CLOSE: undefined;
};

export type IModalActions = {
  [Key in keyof ActionPayloadMap]: {
    type: Key;
    payload: ActionPayloadMap[Key];
  };
}[keyof ActionPayloadMap];

const reducer: React.Reducer<IModalState, IModalActions> = (
  state,
  action,
): IModalState => {
  switch (action.type) {
    case ModalActions.OPEN:
      return {
        ...state,
        componentProps: {...state.componentProps, ...action.payload},
      };
    case ModalActions.CLOSE:
      return {
        ...state,
        componentProps: {
          ...state.componentProps,
          modalName: undefined,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export type Dispatcher = <
  Type extends IModalActions['type'],
  Payload extends ActionPayloadMap[Type],
>(
  type: Type,
  ...payload: Payload extends undefined ? [undefined?] : [Payload]
) => void;

type ModalContextInterface = readonly [IModalState, Dispatcher];

const ModalContext = createContext<ModalContextInterface>([
  DefaultPopupActions,
  () => ({}),
]);

const {Provider, Consumer: ModalConsumer} = ModalContext;

const PopupProvider = ({children}: {children: ReactNode}) => {
  const initialState: IModalState = {
    componentProps: {
      type: ModalType.CUSTOM,
      outAnimationType: OutAnimationType.FADE_OUT,
      animationType: AnimationType.FADE_IN,
    },
    showModal: (options: ModalOptions) => {
      dispatch(ModalActions.OPEN, {...options});
    },
    hideModal: () => {
      dispatch(ModalActions.CLOSE);
    },
  };
  const [state, _dispatch] = useReducer(reducer, initialState);
  const dispatch: Dispatcher = useCallback((type, ...payload) => {
    _dispatch({type, payload: payload[0]} as IModalActions);
  }, []);

  return <Provider value={[state, dispatch]}>{children}</Provider>;
};

const usePopup = () => useContext(ModalContext);

export {ModalConsumer, PopupProvider, usePopup};
