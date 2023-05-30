import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  height: 100vh;
`;

export const Image = styled.img`
  margin-top: 11px;
`;

export const H1 = styled.h1`
  font-size: 28px;
  color: #ffffff;
  font-style: normal;
  font-weight: 700;
`;

export const ContainerItens = styled.div`
  padding: 76px 36px;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  padding: 50px 36px;
`;

export const InputLabel = styled.p`
  font-size: 18px;
  color: #eeeeee;
  padding-left: 15px;
  font-style: normal;
  font-weight: 700;
`;

export const Button = styled(Link)`
  width: 342px;
  height: 68px;
  background: rgba(255, 255, 255, 0.14);
  margin-top: 50px;

  font-size: 17px;
  color: #ffffff;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
  border-radius: 14px;

  img {
    transform: rotateY(180deg);
  }

  &:hover {
    animation-name: buttonAnimation;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    box-shadow: 0 0 50px 20px rgba(74, 82, 110, 0.5);
  }

  &:active {
    opacity: 0.6;
  }

  @keyframes buttonAnimation {
    0% {
      transform: scale(1);
    }

    100% {
      transform: scale(1.05);
    }
  }
`;

export const Request = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 342px;
  height: 101px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  padding: 0 15px;
  border: none;
  outline: none;
  font-size: 18px;
  color: #ffffff;
  font-style: normal;
  font-weight: 300;
  margin-top: 15px;

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover {
    opacity: 0.6;
  }

  button:active {
    opacity: 0.4;
  }
`;

export const DivOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`;
