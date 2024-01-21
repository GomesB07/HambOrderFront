import React from "react";
import axios from "axios";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {Container, Image, ContainerItens, InputLabel, Label} from './styles'
import Burger1 from '../../assets/burger-page1.svg'
import H1 from '../../components/Title'
import Button from '../../components/Button'

const Home = () => {

  const navigate = useNavigate()
  const [orders, setOrders] = useState([])
  const inputOrder = useRef()
  const inputName = useRef()

  const newOrder = async () => {
    const response = await axios.post('http://localhost:3001/order', {order: inputOrder.current.value, clientName: inputName.current.value})
    const makeOrder = response.data
    setOrders([...orders, makeOrder])
    navigate('/orders')
  }


  return (
      <Container>
        <Image src={Burger1} alt="burger" />
        <H1>Faça seu pedido!</H1>

        <ContainerItens>

          <Label>Pedido</Label>
          <InputLabel ref={inputOrder} placeholder="Digite seu pedido"></InputLabel>

          <Label>Nome do Cliente</Label>
          <InputLabel ref={inputName} placeholder="Digite seu nome"></InputLabel>

        </ContainerItens>

        <Button onClick={newOrder}>Novo Pedido</Button>

      </Container>
    )
}

export default Home