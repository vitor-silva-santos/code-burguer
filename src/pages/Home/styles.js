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

export const BoxLabelInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  max-width: 100%;
`;

export const LabelInput = styled.label`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #eeeeee;
  margin-left: 15px;
`;

export const Input = styled.input`
  height: 58px;
  width: 100%;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  padding-left: 15px;
  margin-bottom: 30px;

  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;
