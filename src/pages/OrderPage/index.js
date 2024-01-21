import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {Container, Image, Order} from './styles'
import Burger from '../../assets/burger-page2.svg'
import Trash from '../../assets/trash.svg'
import H1 from '../../components/Title'
import Button from '../../components/Button'

const OrderPage = () => {
    const navigate = useNavigate()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const newOrder = async () => {
          const {data: order} = await axios.get('http://localhost:3001/orders')
          setOrders(order)
        }
        newOrder()
      }, [])
    
      const deleteOrder = async (orderId) => {
        await axios.delete(`http://localhost:3001/order/${orderId}`)
        const totalOrders = orders.filter(order => order.id !== orderId)
        setOrders(totalOrders)
      }

      const backPage = () => {
        navigate('/')
      }

    return(
        <Container>
            <Image src={Burger}/>
            <H1>Pedidos</H1>

            <ul>
          {
            orders.map(order => (
              <Order key={order.id}>
                <div className="div-order">
                  <p>{order.order}</p>
                  <p className="p-client-name">{order.clientName}</p>
                </div>
                <div className="div-trash">
                  <button><img onClick={() => deleteOrder(order.id)} src={Trash} alt="img-trash" /></button>
                </div>
              </Order>
            ))
          }
        </ul>

        <Button isBack={true} onClick={backPage}>Voltar</Button>

        </Container>
    )
}

export default OrderPage