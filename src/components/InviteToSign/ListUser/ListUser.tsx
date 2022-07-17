import classNames from 'classnames';
import React from 'react';

// import './ListUser.scss';
import UserItem from '../UserItem';

// import { IListUserProps } from './ListUser.interface'

const DATA = [
  {email: 'tungp+1@dgroup.co'},
  {email: 'tungp+2@dgroup.co'},
  {email: 'tungp+3@dgroup.co'},
  {email: 'tungp+4@dgroup.co'},
  {email: 'tungp+5@dgroup.co'},
  {email: 'tungp+6@dgroup.co'},
  {email: 'tungp+7@dgroup.co'},
  {email: 'tungp+8@dgroup.co'},
  {email: 'tungp+9@dgroup.co'},
  {email: 'tungp+10@dgroup.co'},
  {email: 'tungp+11@dgroup.co'},
];

const ListUser: React.FC = () => {
  return (
    <div className={classNames('ListUser__container')}>
      {DATA.map((item, index) => {
        return <UserItem user={item} key={`UserItem-${index}`} />;
      })}
      <div className={classNames('ListUser__separator')} />
    </div>
  );
};

export default ListUser;
