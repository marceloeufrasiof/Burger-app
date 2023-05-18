import React from "react";
import {
  Container,
  Image,
  H1,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  Request,
} from "./styles";
import Image1 from "./Assets/burger1.png";
import Arrow from "./Assets/arrow.svg";
import Trash from "./Assets/trash.svg";

function App() {
  const requests = [
    { id: Math.random(), order: "X-tudo", name: "Marcelo" },
    { id: Math.random(), order: "Eggs X-salada", name: "Gislayne" },
  ];

  return (
    <Container>
      <Image src={Image1} alt="Burger" />

      <H1> Faça seu pedido! </H1>

      <ContainerItens>
        <InputLabel> Pedido </InputLabel>

        <Input placeholder="1 Coca-Cola, 1-X Salada "></Input>

        <InputLabel> Nome do cliente </InputLabel>

        <Input placeholder="Steve Jobs"></Input>

        <Button>
          Novo Pedido <img src={Arrow} alt="arrow" />
        </Button>

        <ul>
          {requests.map((request) => (
            <Request key={request.id}>
              <p>{request.order}</p> <p>{request.name}</p>
              <button>
                <img src={Trash} alt="trash" />
              </button>
            </Request>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;
