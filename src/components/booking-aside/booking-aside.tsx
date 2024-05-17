import React from "react";

import { Booking_button } from "../booking-aside-button";
import { Booking_label } from "../booking-aside-label";
import { Booking_price } from "../booking-aside-price";
import {
    Aside,
    Form
  } from "./booking-aside.style"

const labels = [
    {
        id: "firstName",
        type: "text",
        sample: "Иван",
        text: "Имя"
    },
    {
        id: "lastName",
        type: "text",
        sample: "Иванов",
        text: "Фамилия"
    },
    {
        id: "phoneNumber",
        type: "tel",
        sample: "+7(999)999-99-99",
        pattern: "+7([0-9]{3})[0-9]{3}-[0-9]{2}-[0-9]{2}",
        text: "Телефон"
    },
    {
        id: "email",
        type: "email",
        sample: "почта@mail.ru",
        text: "Email:"
    }
];

export const Booking_aside = ({ data }) => {
    if (!data || !Array.isArray(data)) {
        return null;
    }

    const totalQuantity = data.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = data.reduce((total, item) => total + item.price * item.quantity, 0);
    const discount = 10;

    return (
        <Aside>
            <Form action="#">
                {labels.map((item) => (
                    <Booking_label
                        key={item.id}
                        id={item.id}
                        type={item.type}
                        pattern={item.pattern}
                        text={item.text}
                        sample={item.sample}
                    />
                ))}
                <Booking_price count={totalQuantity} price={totalPrice} discount={discount} />
                <Booking_button />
            </Form>
        </Aside>
    );
};
