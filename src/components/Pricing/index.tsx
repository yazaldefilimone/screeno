import React, { FunctionComponent } from 'react';
import { GlobalSection } from '../GblobalSection';
import { GlobalContainer } from '../GlobalContainer';

import { PricingContainer, PricingContent, PricingData } from './styles';
import pricingBg from '../../assets/img/bg2.jpg';
import icon from '../../assets/icons/arrow.svg';
export const Pricing: FunctionComponent = () => {
  const pricing = [
    {
      price: '45$',
      desc: 'Donate',
    },
    {
      desc: 'Donate',
      price: '75$',
    },
    {
      desc: 'Donate',
      price: '15$',
    },
  ];
  return (
    <GlobalSection dark={true} idSection="pricing">
      <GlobalContainer>
        <PricingContainer>
          <h2>We help you grow</h2>

          <PricingContent>
            <div>
              <h3>Monetize your way</h3>
              <p>
                Set up subscriptions, rentals, or one-time buys for access to your VOD and live streams. Create exclusive
                experiences for subscribers with coupons and promotions. One predictable fee, transparent pricing, and same-day
                setup.
              </p>
              <a href="#get">
                Get Started <img src={icon} alt="icon" />
              </a>
            </div>

            <PricingData>
              <div>
                <ul>
                  {pricing.map((item) => (
                    <li>
                      <span>{item.desc}</span>
                      <span>{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <img src={pricingBg} alt="" />
            </PricingData>
          </PricingContent>
          <PricingContent></PricingContent>
        </PricingContainer>
      </GlobalContainer>
    </GlobalSection>
  );
};
