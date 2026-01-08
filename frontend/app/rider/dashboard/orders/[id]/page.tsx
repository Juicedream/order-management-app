"use client";
import { useParams } from 'next/navigation'
import React from 'react'

const OrderIdPage = () => {
    const {id} = useParams();
  return (
    <div>Order {id}</div>
  )
}

export default OrderIdPage