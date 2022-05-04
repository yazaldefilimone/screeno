import React, { FunctionComponent } from 'react';
import { GlobalContainer } from '../GlobalContainer';

import { FooterContainer, FooterContent, Footter } from './styles';
import location from '../../assets/icons/location.svg';
import callIcon from '../../assets/icons/vector-call.svg';
import emailIcon from '../../assets/icons/vector-email.svg';

export const Footer: FunctionComponent = () => {
  return (
    <FooterContainer>
      <GlobalContainer>
        <FooterContent>
          <section>
            <div>
              <a href="#">
                scr<span>ee</span>no
              </a>
              <p>Streaming and video platform</p>
            </div>
            <div>
              <h3>Contact info</h3>
              <ul>
                <li>
                  <a href="#">
                    <img src={location} alt="location" />
                    2715 Ash Dr. san jose, South Dakata 83475
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={callIcon} alt="call" />
                    (219) 555-0114
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={emailIcon} alt="icon" />
                    info@screeno.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Get in touch</h3>
              <form>
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Your Email" />
                <textarea placeholder="Your message" name="message" cols={30} rows={5}></textarea>
                <button>Send</button>
              </form>
            </div>
          </section>

          <Footter>
            <p>2022 Screeno Ltd, All rights reserved</p>
          </Footter>
        </FooterContent>
      </GlobalContainer>
    </FooterContainer>
  );
};
