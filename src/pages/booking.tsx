import React from "react";

import './booking.css';
import { Footer } from "../components/all-footer";
import { Booking_container } from "../components/booking-container";
import { Booking_aside } from "../components/booking-aside";
import { Booking_header } from "../components/booking-header";

const Booking = () => {
  return (
    <>
      <Booking_header/>
      <main>
        <Booking_container/>
        <Booking_aside/>
      </main>
      <Footer/>
    </>
  );
};

export default Booking;