import React, { FunctionComponent } from 'react';

import { Wrapper } from './styles';
interface GlobalContainerProps {
  children?: any;
}

export const GlobalContainer = ({ children }: GlobalContainerProps) => {
  return <Wrapper> {children} </Wrapper>;
};
