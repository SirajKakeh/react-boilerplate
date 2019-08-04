/**
 *
 * Input
 *
 */

import React, { memo } from 'react';
import StyledInput from './StyledInput';
import Wrapper from './Wrapper';

function Input() {
  return (
    <Wrapper>
      <StyledInput />
    </Wrapper>
  );
}

Input.propTypes = {};

export default memo(Input);
