import React, { FunctionComponent } from 'react';
import { GlobalSection } from '../GblobalSection';
import { GlobalContainer } from '../GlobalContainer';

import { StartingImg, PricingContainer, PricingContent, PricingData, PricingData2, PricingContentText, Starting } from './styles';
import pricingBg from '../../assets/img/bg2.jpg';
import startingBg from '../../assets/img/frame2.svg';
import pricingBg2 from '../../assets/img/bg3.jpg';
import emailSvg from '../../assets/icons/vector-email-dark.svg';
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
            <PricingContentText>
              <h3>Monetize your way</h3>
              <p>
                Set up subscriptions, rentals, or one-time buys for access to your VOD and live streams. Create exclusive
                experiences for subscribers with coupons and promotions. One predictable fee, transparent pricing, and same-day
                setup.
              </p>
              <a href="#get">
                Get Started <img src={icon} alt="icon" />
              </a>
            </PricingContentText>

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

          <PricingContent>
            <PricingData2>
              <div>
                <span>1</span>

                <img src={emailSvg} alt="" />
              </div>
              <img src={pricingBg2} alt="" />
            </PricingData2>
            <PricingContentText>
              <h3>Optimized for growth</h3>
              <p>
                Set up subscriptions, rentals, or one-time buys for access to your VOD and live streams. Create exclusive
                experiences for subscribers with coupons and promotions. One predictable fee, transparent pricing, and same-day
                setup.
              </p>
              <a href="#get">
                Get Started <img src={icon} alt="icon" />
              </a>
            </PricingContentText>
          </PricingContent>

          <Starting>
            <div>
              <h2>Start your own business today</h2>
              <p>consistent quality and experience across all platforms and devices</p>
            </div>

            <div>
              <a href="#start">Start free Trail</a>
              <a href="#login">login</a>
            </div>

            <StartingImg img={startingBg}>
              <img src={startingBg} alt="" />
              <div></div>
            </StartingImg>
          </Starting>
        </PricingContainer>
      </GlobalContainer>
    </GlobalSection>
  );
};
