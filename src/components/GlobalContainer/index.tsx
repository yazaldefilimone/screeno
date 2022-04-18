import React, { FunctionComponent } from 'react';

import { Wrapper } from './styles';
interface GlobalContainerProps {
  children?: React.ReactChild;
}

export const GlobalContainer: FunctionComponent = ({ children }: GlobalContainerProps) => {
  return <Wrapper> {children} </Wrapper>;
};
