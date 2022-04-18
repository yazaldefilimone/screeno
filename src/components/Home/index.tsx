import React, { FunctionComponent } from 'react';
import { GlobalSection } from '../GblobalSection';
import { GlobalContainer } from '../GlobalContainer';

import { Wrapper, HomeData, HomeContent, WrapperContainer, Company } from './styles';

import Group1 from '../../assets/img/Group1.png';
import Group2 from '../../assets/img/Group2.png';
import Group3 from '../../assets/img/Group3.png';
import Group4 from '../../assets/img/Group4.png';
import Group5 from '../../assets/img/Group5.png';
import homeBg from '../../assets/img/frame1.png';
export const Home: FunctionComponent = () => {
  const company = [Group1, Group2, Group3, Group4, Group5];
  return (
    <GlobalSection dark={true} idSection="home">
      <GlobalContainer>
        <WrapperContainer>
          <Wrapper>
            <HomeContent>
              <h1>
                Reach more <br /> people in real time
              </h1>
              <p>
                The Screeno ecosystem is designed to help you generate profit set upp complete sales and marketing funnels with
                ease using the Screeno.
              </p>
              <div>
                <a href="#start">Start free Trail</a>
                <a href="#login">login</a>
              </div>
            </HomeContent>
            <HomeData img={homeBg}>
              <div>
                <span>Live</span>
                <img src={homeBg} alt="home img" />
                <div></div>
              </div>
            </HomeData>
          </Wrapper>
          <Company>
            <ul>
              {company.map((company) => (
                <li>
                  <img src={company} alt="company" />
                </li>
              ))}
            </ul>
          </Company>
        </WrapperContainer>
      </GlobalContainer>
    </GlobalSection>
  );
};
