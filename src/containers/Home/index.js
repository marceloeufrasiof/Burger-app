import React, { useState, useRef} from "react";
import {
  Container,
  Image,
  H1,
  ContainerItens,
  InputLabel,
  Input,
  Button,
} from "./styles";
import axios from "axios";
import Image1 from "../../Assets/burger1.png";
import Arrow from "../../Assets/arrow.svg";

function App() {
  // const requests = [];
  const [requests, setRequests] = useState([]);
  const inputOrder = useRef();
  const inputName = useRef();

  async function addNewRequest() {
    const { data: newRequest } = await axios.post(
      "http://localhost:3001/users",
      {
        order: inputOrder.current.value,
        name: inputName.current.value,
      }
    );
    setRequests([...requests, newRequest]);
  }

  return (
    <Container>
      <Image src={Image1} alt="Burger" />

      <H1> Faça seu pedido! </H1>

      <ContainerItens>
        <InputLabel> Pedido </InputLabel>

        <Input ref={inputOrder} placeholder="1 Coca-Cola, 1-X Salada "></Input>

        <InputLabel> Nome do cliente </InputLabel>

        <Input ref={inputName} placeholder="Steve Jobs"></Input>

        <Button onClick={addNewRequest}>
          Novo Pedido <img src={Arrow} alt="arrow" />
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App;
