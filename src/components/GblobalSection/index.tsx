import React, { FunctionComponent } from 'react';

import { Wrapper } from './styles';
interface GlobalSectionProps {
  children?: React.ReactChild;
  id?: string;
}
export const GlobalSection: FunctionComponent = ({ id, children }: GlobalSectionProps) => {
  return <Wrapper id={id ? id : ''}>{children}</Wrapper>;
};
