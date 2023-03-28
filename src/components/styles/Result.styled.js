import styled from "styled-components";

export const ResultStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  max-width: 100%;
  width: 50%;
  height: 100%;
  border-radius: 0.7rem;
  background-image: linear-gradient(
    to top,
    #352feb,
    #4133ef,
    #4b36f3,
    #543af7,
    #5d3efb
  );
  p {
    color: #998ef8;
    padding: 0 20px;
  }
  span {
    font-size: 1.6rem;
    margin: 10px 0;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 200px;
    border-radius: 50%;

    background-image: linear-gradient(
      to bottom,
      #352feb,
      #4133ef,
      #4b36f3,
      #543af7,
      transparent
    );
    & p {
      display: flex;
      flex-direction: column;
      font-size: 5rem;
      font-weight: 600;
      color: #fff;
      & span {
        font-size: 1rem;
        color: #998ef8;
      }
    }
  }
`;
