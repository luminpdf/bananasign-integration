import React from 'react';
import { REQUEST_TYPE } from '@src/constants/common';
export var initialState = {
    loading: false,
    isOpenAddAssignerModal: false,
    signers: [],
    viewers: [],
    type: REQUEST_TYPE.SIGNER,
    keyWordSearchContact: '',
    searchContacts: [],
    cancelAddAssigners: false,
    openBananasignIframe: false,
    modalWarningData: {
        type: '',
    },
    onClose: function () { return undefined; },
    saveDocumentInfo: function (_payload) {
        return Promise.resolve({ identify: '' });
    },
    identify: '',
    bananasignUrl: '',
};
var InviteToSignContext = React.createContext({
    state: initialState,
    dispatch: function () { return undefined; },
});
export default InviteToSignContext;
//# sourceMappingURL=InviteToSignContext.js.map