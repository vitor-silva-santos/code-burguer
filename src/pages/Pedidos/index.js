import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// CSS
import { Container, Img, Ul, Order } from "./styles";

// COMPONENTS
import Button from "../../components/Button";
import H1 from "../../components/H1";

// IMG
import ImgPedido from "../../img/img-order.png";
import Lixo from "../../img/lixo.svg";

function Pedidos() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchOrder = async () => {
      const { data: newOrders } = await axios.get(
        "http://localhost:3001/order"
      );
      setOrders(newOrders);
    };
    fetchOrder();
  }, []);

  const deleteOrder = async (userId) => {
    await axios.delete(`http://localhost:3001/order/${userId}`);
    const newOrders = orders.filter((order) => order.id !== userId);
    setOrders(newOrders);
  };

  const goBack = () => {
    history.push("/");
  };

  return (
    <Container>
      <Img src={ImgPedido} alt="Logo de pedido" />
      <H1>Pedidos</H1>

      <Ul>
        {orders.map((order) => (
          <Order key={order.id}>
            <div>
              <p>{order.order}</p>
              <p>{order.clientName}</p>
            </div>
            <button
              onClick={() => {
                deleteOrder(order.id);
              }}
            >
              <img src={Lixo} alt="Lata de Lixo" />
            </button>
          </Order>
        ))}
      </Ul>

      <Button isBack={true} onClick={goBack}>
        Voltar
      </Button>
    </Container>
  );
}

export default Pedidos;
