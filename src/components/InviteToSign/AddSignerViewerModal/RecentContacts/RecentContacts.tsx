import './RecentContact.style.scss';

import React from 'react';

import {Images} from '@src/assets';

// import AssignerItem from '../../InviteUser/AssignerItem';

const EmptyContacts = () => {
  return (
    <div className="RecentContacts__no-contacts">
      <img alt="image_empty_contacts" src={Images.image_empty_contracts} />
      <span>No recent contacts</span>
    </div>
  );
};

const RecentContacts: React.FC = () => {
  return (
    <>
      {<EmptyContacts />}
      <div className="RecentContacts__list-contacts">
        {/* <AssignerItem /> */}
      </div>
    </>
  );
};

export default RecentContacts;
