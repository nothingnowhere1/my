import React from "react";

import { Price_detail } from "./booking-aside-price.style";

interface PriceProps {
    count: number;
    price: number;
    discount: number;
  }

export const Booking_aside_price = ( props: PriceProps ) => {
    const discountAmount = (props.price * props.discount) / 100;
    const finalPrice = props.price - discountAmount;

    return (
        <>
            <Price_detail>{props.count} товара(ов) на сумму {props.price} руб.</Price_detail>
            <Price_detail>Скидка - {discountAmount} руб.</Price_detail>
            <Price_detail>Итого к оплате - {finalPrice} руб.</Price_detail>
        </>
    );
};
