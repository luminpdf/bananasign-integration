import React from 'react';

import AnimatedBox from '../AnimatedBox';
import {InviteToSignProvider} from './InviteToSign.context';
import InviteUser from './InviteUser';
import {Wrapper} from './Wrapper';

export const InviteToSign = (): React.ReactElement => {
  return (
    <InviteToSignProvider>
      <Wrapper title="Invite people">
        <AnimatedBox>
          <InviteUser />
        </AnimatedBox>
      </Wrapper>
    </InviteToSignProvider>
  );
};
