import React from "react";
import { Booking_item } from "../booking-item";
import { Items_column} from "./booking-container.style"

const data = [
    {
    id: 6,
    photo: 'shirt6_4x',
    alt :"ФУТБОЛКА С ОРНАМЕНТОМ ПЕЙСЛИ", 
    name: "ФУТБОЛКА С ОРНАМЕНТОМ ПЕЙСЛИ", 
    price: "1500 руб.",
    setphoto: ['shirt6_1x','shirt6_2x', 'shirt6_4x'],
    color: "Серый",
    size: "M/L"
},
    {
    id:1,    
    photo: 'shirt1_1x',
    alt :"ФУТБОЛКА С ПРИНТОМ МОСФИЛЬМ", 
    name: "ФУТБОЛКА С ПРИНТОМ МОСФИЛЬМ", 
    price: "1000 руб.",
    setphoto: ['shirt1_1x','shirt1_2x', 'shirt1_4x'],
    color: "Черный",
    size: "M/L"}
];


export const Booking_container = (props) =>  (
    <Items_column>
         {data.map((item, index) => (
          <Booking_item
            key={item.id}
            photo={item.photo}
            name ={item.name}
            price = {item.price}
            setphoto = {item.setphoto}
            color = {item.color}
            size = {item.color}
            alt={item.alt}
          />
        ))}
    </Items_column>
)
