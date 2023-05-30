import React, { useState, useEffect } from "react";
import {
  Container,
  Image,
  H1,
  ContainerItens,
  Button,
  Request,
  DivOrder,
} from "./styles";
import axios from "axios";
import Image2 from "../../Assets/burger2.png";
import Arrow from "../../Assets/arrow.svg";
import Trash from "../../Assets/trash.svg";

function Requests() {
  const [requests, setRequests] = useState([]);

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
    await axios.delete(`http://localhost:3001/users/${requestId}`);
    const newRequests = requests.filter((request) => request.id !== requestId);
    setRequests(newRequests);
  }

  return (
    <Container>
      <Image src={Image2} alt="Burger" />

      <H1> Pedidos </H1>

      <ContainerItens>
        

        <ul>
          {requests.map((request) => (
            <Request key={request.id}>
              <DivOrder>
              <p>{request.order}</p> <p>{request.name}</p>
              </DivOrder>
              <button onClick={() => deleteRequest(request.id)}>
                <img src={Trash} alt="trash" />
              </button>
            </Request>
          ))}
        </ul>

        
      </ContainerItens>
      <Button to="/">
          <img src={Arrow} alt="arrow" /> Voltar
        </Button>
    </Container>
  );
}

export default Requests;
