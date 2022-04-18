import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: var(--dark-color);
  color: var(--white-color);
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > a {
      color: var(--white-color);
      font-weight: bolder;
      font-size: 2rem;
      span {
        color: var(--frist-color);
      }
    }
  }
`;
export const Navegation = styled.nav`
  width: max-content;
  height: calc(var(--header-height) + 1rem);
  display: flex;
  align-items: center;
  gap: 5rem;
  ul {
    display: flex;
    gap: 2rem;
    a {
      text-transform: capitalize;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;
    a {
      padding: 0.5rem 1.4rem;
      border-radius: 0.5rem;
      &:last-child {
        background: var(--frist-color);
      }
    }
  }
`;

export const Menu = styled.div`
  display: none;
`;
