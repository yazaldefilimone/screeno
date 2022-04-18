import React from 'react';

import { Wrapper } from './styles';
interface GlobalSectionProps {
  children?: any;
  idSection?: string;
  dark: boolean;
}
export const GlobalSection = ({ idSection, children, dark }: GlobalSectionProps) => {
  return (
    <Wrapper dark={dark} id={idSection ? idSection : ''}>
      {children}
    </Wrapper>
  );
};
