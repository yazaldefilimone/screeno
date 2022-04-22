import React, { FunctionComponent } from 'react';
import { GlobalSection } from '../GblobalSection';

import { Container, AboutContent } from './styles';
import img1 from '../../assets/img/rectangle1.png';
import img2 from '../../assets/img/rectangle2.png';
import img3 from '../../assets/img/rectangle3.png';
import img4 from '../../assets/img/rectangle4.png';
import img5 from '../../assets/img/rectangle5.png';
import img6 from '../../assets/img/rectangle6.png';
import img7 from '../../assets/img/rectangle7.png';
import img8 from '../../assets/img/rectangle8.png';

export const About: FunctionComponent = () => {
  const slideImgs = [img1, img8, img3, img5, img4, img6, img7, img2];
  return (
    <GlobalSection idSection="about" dark={false}>
      <Container>
        <h2>Famous live on our platform</h2>
        <p>At the end of day have fun with celebrities.</p>
        <AboutContent>
          <ul>
            {slideImgs.map((img) => (
              <li>
                <img src={img} alt="img" />
              </li>
            ))}
          </ul>
        </AboutContent>
      </Container>
    </GlobalSection>
  );
};
