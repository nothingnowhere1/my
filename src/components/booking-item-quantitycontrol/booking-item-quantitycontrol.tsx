import React from "react";
import {
    Control,
    Button,
    Quantity,
} from "./booking-item-quantitycontol.style";

export const Booking_item_quantitycontol = ({ quantity, setQuantity }) => {
    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    return (
        <Control>
            <Button onClick={decreaseQuantity}>–</Button>
            <Quantity>{quantity}</Quantity>
            <Button onClick={increaseQuantity}>+</Button>
        </Control>
    );
};

