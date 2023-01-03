import styled from "styled-components";

export const Container = styled.div`
  background: #0a0a10;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
`;

export const Img = styled.img`
  max-width: 100%;
  margin-top: 15px;
`;

export const Ul = styled.ul`
  width: 300px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 50px;
`;

export const Order = styled.li`
  min-height: 90px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  div {
    display: flex;
    flex-direction: column;
    max-width: 70%;
    justify-content: space-around;
    padding: 10px 0;
  }

  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }

  p:last-child {
    font-weight: 700;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
