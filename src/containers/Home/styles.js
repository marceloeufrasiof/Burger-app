import styled from "styled-components";

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
  flex-direction: column;
  padding: 50px 36px;
`;

export const InputLabel = styled.p`
  font-size: 18px;
  color: #eeeeee;
  padding-left: 15px;
  font-style: normal;
  font-weight: 700;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;

  font-size: 18px;
  color: #ffffff;
  padding-left: 15px;
  margin-bottom: 42px;
  font-style: normal;
  font-weight: 300;

  &::placeholder {
    color: white;
  }
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  margin-top: 50px;
  background: linear-gradient(to right, #d93856, rgb(74, 39, 110));

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


