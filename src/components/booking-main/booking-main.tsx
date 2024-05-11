import React from "react";

import { Booking_container } from "../booking-container";
import { Booking_aside } from "../booking-aside";
import { Main } from "./booking-main.style";

export const Booking_main = () => (
    <Main>
        <Booking_container/>
        <Booking_aside/>
    </Main>
)