import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;

  div {
    background: ${({ theme }) => theme.colors.shape};
    padding: 1.5rem;
    border-radius: 0.25rem;
    color: ${({ theme }) => theme.colors.title};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: ${({ theme }) => theme.colors.green};
      color: #fff;
    }
  }
`;

export const StyledSummary = {
  Container,
}