import React, { FunctionComponent } from 'react';
import { GlobalSection } from '../GblobalSection';
import { GlobalContainer } from '../GlobalContainer';

import { PricingContainer } from './styles';

export const Pricing: FunctionComponent = () => {
  return (
    <GlobalSection dark={true} idSection="pricing">
      <GlobalContainer>
        <PricingContainer></PricingContainer>
      </GlobalContainer>
    </GlobalSection>
  );
};
