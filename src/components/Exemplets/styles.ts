import styled from 'styled-components';

export const ExempletsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
export const ExempletsContent = styled.section`
  h2,
  p {
    text-align: center;
  }
  p {
    max-width: 50ch;
    margin: 0px auto;
  }
  h2 {
    font-size: var(--h1-font-size);
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    div {
      display: flex;
      align-items: center;
      gap: 2rem;
      a {
        padding: 0.6rem 1.4rem;
        border-radius: 1rem;
        width: 160px;
        text-align: center;
        &:first-child {
          background: var(--frist-color);
          color: var(--white-color);
        }
        &:last-child {
          border: 1px solid var(--dark-color);
        }
      }
    }
  }
`;
export const ExempletsData = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h3 {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      p {
        max-width: 30ch;
      }
    }
  }
`;
