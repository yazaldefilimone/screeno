import styled from 'styled-components';

export const PricingContainer = styled.div`
  h2 {
    text-align: center;
    font-size: var(--h1-font-size);
    margin-bottom: 4rem;
  }
`;
export const PricingContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  place-items: center;
  div:first-child {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h3 {
      font-weight: 600;
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
      font-weight: 400;
      max-width: 40ch;
    }
    a {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;
export const PricingData = styled.div`
  position: relative;
  div {
    top: -1rem;
    left: -15%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: var(--white-color);
    border-radius: 1.5rem;
    color: var(--dark-color);
    ul {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      weight: 100%;
      height: 100%;
      li {
        display: flex;
        align-items: center;
        gap: 2rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        background: rgba(204, 204, 204, 0.238);
        font-size: 0.998rem;
        font-weight: bold;
        &:nth-child(2) {
          background: var(--frist-color-alt);
          color: var(--frist-color);
        }
      }
    }
  }
  img {
    weight: 100%;
    border-radius: 1.5rem;
  }
`;
