import React, { FunctionComponent } from 'react';
import { GlobalContainer } from '../GlobalContainer';

import { Container, Navegation, Menu } from './styles';

export const Header: FunctionComponent = () => {
  const links = ['exemplets', 'pricing', 'about'];

  return (
    <Container>
      <GlobalContainer>
        <a href="#">
          scr<span>ee</span>no
        </a>

        <Navegation>
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
        </Navegation>
        <Menu>
          <span></span>
        </Menu>
      </GlobalContainer>
    </Container>
  );
};
