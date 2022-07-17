import {
  IInviteToSignAction,
  IInviteToSignState,
} from './InviteToSign.interface';

export function InviteToSignReducer(
  state: IInviteToSignState,
  action: IInviteToSignAction,
): IInviteToSignState {
  const {type} = action;
  switch (type) {
    default:
      return state;
  }
}
