import styled from "styled-components";

export const Button = styled.button`
  width: 300px;
  max-width: 100%;
  height: 68px;
  background: ${(props) =>
    props.isBack ? "rgba(255, 255, 255, 0.14)" : "#d93856"};
  border: none;
  margin-top: 30px;

  font-weight: 700;
  font-size: 18px;
  line-height: 2px;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
    transform: scale(0.99);
    transition: 0.1s;
  }
`;
