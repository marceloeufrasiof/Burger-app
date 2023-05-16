import React from "react";
import { Container, Image, H1, ContainerItens, InputLabel, Input, Button, Body } from "./styles";
import Image1 from "./Assets/burger1.png"

function App() {
  return (
    
    <Container>
      <Image src={Image1} alt="Burger"/>

      <H1> Faça seu pedido! </H1>

      <ContainerItens>

      <InputLabel> Pedido </InputLabel>

      <Input placeholder="1 Coca-Cola, 1-X Salada "></Input>

      <InputLabel> Nome do cliente </InputLabel>

      <Input placeholder="Steve Jobs"></Input>
      </ContainerItens>

      <Button> Novo Pedido </Button>

    </Container>
  );
}

export default App;
