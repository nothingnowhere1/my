import React from "react";

import { Quantity_control } from "../booking-item-quantitycontrol";
import { landing } from "../../assets/images";
import {
  Item,
  Item_image,
  Item_details,
  Price,
  H2,
  P,
} from "./booking-item.style";

export const Booking_item = ({
  photo,
  alt,
  name,
  price,
  setPhoto,
  color,
  size,
  quantity,
  setQuantity
}) => (
  <Item>
    <Item_image src={landing[photo]} srcSet={`${landing[setPhoto[0]]} 220w, ${landing[setPhoto[1]]} 445w, ${landing[setPhoto[2]]} 880w`} alt={alt}/>
    <Item_details>
      <H2>{name}</H2>
      <P>Размер: {size}</P>
      <P>Цвет: {color}</P>
      <Price>{price} руб.</Price>
      <Quantity_control quantity={quantity} setQuantity={setQuantity} />
    </Item_details>
  </Item>
);
