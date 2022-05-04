import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: rgba(204, 204, 204, 0.238);
  padding: 2rem;
`;
export const FooterContent = styled.div`
  section {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    place-items: center;
    gap: 2rem;
    @media screen and (max-width: 1153px) {
      grid-template-columns: repeat(3, max-content);
    }

    @media screen and (max-width: 1000px) {
      grid-template-columns: auto;
    }

    div {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    div:nth-child(1) {
      a {
        color: var(--dark-color);
        font-weight: bolder;
        font-size: 2rem;
        span {
          color: var(--frist-color);
        }
      }
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        a {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
      }
    }

    > div:nth-child(3) {
      > form {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        input {
          background: var(--white-color);
          padding: 0.7rem;
          border-radius: 0.5rem;
          &::placeholder {
            color: var(--dark-color);
          }
        }
        textarea {
          background: var(--white-color);
          padding: 0.7rem;
          border-radius: 0.5rem;
          border: none;
          &::placeholder {
            color: var(--dark-color);
          }
        }
        button {
          background: var(--frist-color);
          width: max-content;
          color: var(--white-color);
          padding: 0.8rem 2rem;
          border-radius: 0.5rem;
        }
      }
    }
  }

  > div:last-child {
    width: 100%;
    border-top: 2px solid var(--gray-color);
    grid-column-start: -5;
    grid-column-end: -1;
    p {
      text-align: center;
    }
  }
`;

export const Footter = styled.div``;
