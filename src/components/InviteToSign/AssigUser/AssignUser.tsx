import React from 'react';

import Button from '@src/components/Button';

import ListUser from '../ListUser';
import {IAssignUserProps} from './AssignUser.inteface';

// import './AssignUser.scss';

const AssignUser: React.FC<IAssignUserProps> = (props) => {
  const {isDisabled} = props;

  return isDisabled ? null : (
    <div className="AssignUser__container">
      <div className="AssignUser__title">
        <h3 className="AssignUser__title--text"></h3>
      </div>
      <div className="AssignUser__wrapper">
        <ListUser />

        {/* footer */}
        <Button isRippleEffect title="AssignUser" />
      </div>
    </div>
  );
};

export default AssignUser;
