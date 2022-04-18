import styled from 'styled-components';

export const Wrapper: any = styled.section`
  padding: 5rem 1rem;
  background: ${(props: any) => (props.dark ? 'var(--dark-color)' : 'var(--white-color)')};
  color: ${(props: any) => (props.dark ? 'var(--white-color)' : 'var(--dark-color)')}; ;
`;
