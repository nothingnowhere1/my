import React from "react";

import {
    Contol,
    Button,
    Quantity,
  } from "./booking-item-quantitycontol.style";

export const Quantity_control = (props) =>  (
    <Contol>
            <Button>–</Button>
            <Quantity>1</Quantity>
            <Button>+</Button>
    </Contol>
)