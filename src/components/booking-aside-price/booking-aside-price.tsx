import React from "react";

export const Booking_price = (props) => {
    return (
        <>
            <p>{props.count.reduce((total,current)=>total+current,0)} товара {props.price.reduce((total,current)=>total+current,0)}</p>
            <p>Скидка - {props.price.reduce((total,current)=>total+current,0)*(props.discount)/100}</p>
            <p>Итого к оплате - {props.price.reduce((total,current)=>total+current,0)*(100-props.discount)/100}</p>
        </>
    )
}