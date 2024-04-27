import React from "react";

import { Booking_button } from "../booking-aside-button";
import { Booking_label } from "../booking-aside-label";
import { Booking_price } from "../booking-aside-price";
import {
    Aside,
    Form
  } from "./booking-aside.style"

let label = [
    {
        id:"firstName",
        type:"text",
        sample:"Иван",
        text:"Имя"
    },
    {
        id:"lastName",
        type:"text",
        sample:"Иванов",
        text:"Фамилия"
    },
    {
        id:"phoneNumber",
        type:"tel",
        sample:"+7(999)999-99-99",
        pattern:"+7([0-9]{3})[0-9]{3}-[0-9]{2}-[0-9]{2}",
        text:"Телефон"
    },
    {
        id:"email",
        type:"email",
        sample:"почта@mail.ru",
        text:"Email:"
    }
]

let sum = {
    count: [1,2],
    price: [1000,3000],
    discount: 25
}

export const Booking_aside = (props) =>  (
    <Aside>
        <Form action="#">
            {label.map((item, index) => (
                <Booking_label
                key={item.id}
                id={item.id}
                type={item.type}
                pattern={item.pattern}
                text={item.text}
                sample={item.sample}
                />
            ))}
            <Booking_price count = {sum.count} price = {sum.price} discount = {sum.discount}/>
            <Booking_button/>
        </Form>
    </Aside>
)