import React, { useState, useRef, useEffect } from "react";
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
import axios from "axios";
import Image1 from "./Assets/burger1.png";
import Arrow from "./Assets/arrow.svg";
import Trash from "./Assets/trash.svg";

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

  useEffect(() => {
    async function fetchRequests() {
      const { data: newRequests } = await axios.get(
        "http://localhost:3001/users"
      );

      setRequests(newRequests);
    }
    fetchRequests();
  }, [requests]);

  async function deleteRequest(requestId) {
    await axios.delete(`http://localhost:3001/users/${requestId}`)
    const newRequests = requests.filter((request) => request.id !== requestId);
    setRequests(newRequests);
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

        <ul>
          {requests.map((request) => (
            <Request key={request.id}>
              <p>{request.order}</p> <p>{request.name}</p>
              <button onClick={() => deleteRequest(request.id)}>
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
