import React from 'react';

import Button from '@src/components/Button';

import AssignUser from '../AssigUser';

// import './InviteUser.scss';

export const InviteUser = (): React.ReactElement => {
  return (
    <div className="InviteUser__container">
      <AssignUser type={'SIGNER'} />
      <AssignUser type={'Viewer'} />

      {/* footer */}
      <Button title="Submit" isRippleEffect />
    </div>
  );
};
