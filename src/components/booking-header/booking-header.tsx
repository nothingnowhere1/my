import React from "react";

import { logo_1x,logo_2x,logo_4x } from '../../assets/images'
import { Header } from "./booking-header.style";

export const Booking_header = () => {
    return (
        <>
            <Header>
                <img
                src={logo_4x}
                srcSet={`${logo_1x} 220w, ${logo_2x} 445w, ${logo_4x} 880w`}
                alt="Логотип"
                className="logo"
                width={100}
                height={100}
                />
            </Header>
        </>
    )
}