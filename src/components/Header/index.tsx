import React, { FunctionComponent } from "react";

import { Container } from "./styles";

export const Header: FunctionComponent = () => {
  const links = ["home", "about", "features", "how it works"];

  return (
    <Container>
      <h1>header</h1>
    </Container>
  );
};
