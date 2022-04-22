import React, { FunctionComponent } from 'react';
import { GlobalSection } from '../GblobalSection';
import { GlobalContainer } from '../GlobalContainer';

import { ExempletsContainer, ExempletsContent, ExempletsData } from './styles';

import icon1 from '../../assets/icons/group-arrow.svg';
import icon2 from '../../assets/icons/vector-camera.svg';
import icon3 from '../../assets/icons/vector-son.svg';
import icon4 from '../../assets/icons/vector-many.svg';
import icon5 from '../../assets/icons/group-share.svg';
import icon6 from '../../assets/icons/group-tv.svg';

export const Exemplets: FunctionComponent = () => {
  const data = [
    {
      icon: icon1,
      title: 'Upload & Organize',
      desc: 'Upload in bulk, organize content in categories, add custon filters & upload extras',
    },
    {
      icon: icon2,
      title: 'Strean On-Demand',
      desc: 'Showcase your content in a beautiful on-demand video catolog.',
    },
    {
      icon: icon3,
      title: 'Stream Live',
      desc: 'Schedule events in advance & bluid excitement with a countdown overlay.',
    },
    {
      icon: icon4,
      title: 'Monetization',
      desc: 'Offer subscriptions or one-time purchases, Accept credit cards & Paypal',
    },
    {
      icon: icon5,
      title: 'Analytics',
      desc: 'Know what your audience likes & how your content is performing.',
    },
    {
      icon: icon6,
      title: 'For all devices',
      desc: 'Get organized on all devices',
    },
  ];
  return (
    <GlobalSection idSection="exemplets" dark={false}>
      <GlobalContainer>
        <ExempletsContainer>
          <ExempletsContent>
            <h2>All-in-One platform</h2>
            <p>You take care of the video quality and we take care of everything else</p>
            <div>
              <div>
                <a href="#start">Start free Trail</a>
                <a href="#login">login</a>
              </div>
            </div>
          </ExempletsContent>
          <ExempletsData>
            <div>
              {data.map((item) => (
                <div>
                  <h3>
                    <img src={item.icon} alt="icon" />
                    {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </ExempletsData>
        </ExempletsContainer>
      </GlobalContainer>
    </GlobalSection>
  );
};
