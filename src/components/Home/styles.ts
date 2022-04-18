import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  place-items: center;
`;
export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h1 {
    font-size: var(--bigest-font-size);
    line-height: 1.2;
  }
  p {
    max-width: 40ch;
  }

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
      }
      &:last-child {
        border: 1px solid var(--gray-color);
      }
    }
  }
`;

export const HomeData: any = styled.div`
  div {
    position: relative;
    span {
      position: absolute;
      top: -1rem;
      right: -1rem;
      padding: 0.2rem 0.7rem;
      background-color: var(--white-color);
      color: var(--dark-color);
      border-radius: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.9rem;
      &:before {
        display: block;
        content: '';
        cursor: pointer;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: red;
      }
    }
    div {
      width: 200px;
      height: 300px;
      position: absolute;
      bottom: -4rem;
      left: 2rem;
      border-radius: 1rem;
      background-image: url(${(props: any) => (props.img ? props.img : '')});
      background-position: start;
      background-size: cover;
      background-repeat: no-repeat;
      border: 4px solid var(--white-color);
    }
  }
`;

export const WrapperContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto max-content;
  gap: 4rem;
`;
export const Company = styled.div`
  margin-top: 5rem;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      cursor: pointer;
    }
  }
`;
