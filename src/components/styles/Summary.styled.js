import styled from "styled-components";

export const SummaryStyled = styled.div`
  max-width: 100%;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  li {
    display: grid;
    grid-template-columns: 25px 2fr 1fr;
    padding: 20px 10px;
    width: 230px;
    border-radius: 0.7rem;
    font-size: 18px;
    font-weight: 600;
    & span {
      color: #333;
      font-weight: 800;
      & span {
        color: #878899;
      }
    }
    &:not(last-child) {
      margin-bottom: 15px;
    }
    &:first-child {
      color: #ca7071;
      background: rgba(202, 112, 113, 0.1);
    }
    &:nth-child(2) {
      color: #e8b03a;
      background: rgba(232, 176, 58, 0.1);
    }
    &:nth-child(3) {
      color: #33af8b;
      background: rgba(51, 175, 139, 0.1);
    }
    &:nth-child(4) {
      color: #1c25a8;
      background: rgba(28, 37, 168, 0.1);
    }
  }
  button {
    background: #2f2ce7;

    width: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 20px;
    border-radius: 2rem;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    position: absolute;
    bottom: 40px;
    &:hover {
      background: #4434ef;
    }
  }
`;
