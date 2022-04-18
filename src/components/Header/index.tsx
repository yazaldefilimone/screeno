import React, { FunctionComponent } from 'react';
import { GlobalContainer } from '../GlobalContainer';

import { Container } from './styles';

export const Header: FunctionComponent = () => {
  const links = ['exemplets', 'pricing', 'about'];

  return (
    <Container>
      <GlobalContainer>
        <a href="#">
          Scr<span>ee</span>no
        </a>

        <nav>
          <ul>
            {links.map((link) => (
              <li>
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>

          <div>
            <a href="#login">login</a>
            <a href="#start">Start free Trail</a>
          </div>
        </nav>
        <div>
          <span></span>
        </div>
      </GlobalContainer>
    </Container>
  );
};
