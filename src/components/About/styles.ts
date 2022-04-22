import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    text-align: center;
    font-size: var(--h1-font-size);
  }
  p {
    text-align: center;
  }
`;
export const AboutContent = styled.div`.
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:2rem;
  ul{
  overflow:hidden;

   display:grid;
   grid-template-rows:1fr 1fr;
   grid-template-columns:repeat(4, max-content);
   gap:2rem 1rem   }
  }

`;
