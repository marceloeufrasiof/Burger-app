import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const Image = styled.img`
  margin-top: 11px;
`;

export const H1 = styled.h1`
  font-size: 28px;
  color: #ffffff;
`;

export const ContainerItens = styled.div`
  padding: 76px 36px;
  color: white;
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.p`
  font-size: 18px;
  color: #eeeeee;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;

  font-size: 18px;
  color: #ffffff;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  background: #d93856;

  font-size: 17px;
  color: #ffffff;
`;
