import React from "react";
import { Price_detail } from "./booking-aside-price.style";

export const Booking_price = ({ count, price, discount }) => {
    const discountAmount = (price * discount) / 100;
    const finalPrice = price - discountAmount;

    return (
        <>
            <Price_detail>{count} товара(ов) на сумму {price} руб.</Price_detail>
            <Price_detail>Скидка - {discountAmount} руб.</Price_detail>
            <Price_detail>Итого к оплате - {finalPrice} руб.</Price_detail>
        </>
    );
};
