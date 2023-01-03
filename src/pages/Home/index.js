import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// CSS
import { Container, Img, BoxLabelInput, LabelInput, Input } from "./styles";

// Components
import Button from "../../components/Button";
import H1 from "../../components/H1";

// IMG
import ImgHome from "../../img/img-home.png";

function Home() {
  const [orders, setOrders] = useState([]);
  const inputPedido = useRef();
  const inputName = useRef();

  const history = useHistory();

  const addNewOrder = async () => {
    if (inputPedido.current.value === "" || inputName.current.value === "") {
      alert("Adicione um Pedido e Nome antes de apertar o botão");
      return;
    }
    const { data: newOrder } = await axios.post("http://localhost:3001/order", {
      order: inputPedido.current.value,
      clientName: inputName.current.value,
    });
    setOrders([...orders, newOrder]);
    history.push("/pedidos");
  };

  return (
    <Container>
      <Img
        src={ImgHome}
        alt="Logo da hamburgueria CodeClub contendo um lanche e ao lado uma batata frita"
      />
      <H1>Faça seu pedido!</H1>
      <BoxLabelInput>
        <LabelInput>Pedido</LabelInput>
        <Input
          ref={inputPedido}
          type={"text"}
          placeholder={"Ex: 1 Coca-Cola, 1 X-Salada"}
        />
      </BoxLabelInput>

      <BoxLabelInput>
        <LabelInput>Nome do Cliente</LabelInput>
        <Input ref={inputName} type={"text"} placeholder={"Ex: Steve Jobs"} />
      </BoxLabelInput>

      <Button onClick={addNewOrder}>Novo Pedido</Button>
    </Container>
  );
}

export default Home;
