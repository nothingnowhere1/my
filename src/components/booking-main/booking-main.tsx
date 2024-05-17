import React from "react";

import { Booking_container } from "../booking-container";
import { Booking_aside } from "../booking-aside";
import { Main } from "./booking-main.style";

export const Booking_main = ({ data }) => (
    <Main>
        <Booking_container/>
        <Booking_aside data={data} />
    </Main>
)