import React from "react";

import { Footer } from "../components/all-footer";
import { Booking_main } from "../components/booking-main";
import { Booking_header } from "../components/booking-header";

const Booking = () => {
  return (
    <>
      <Booking_header/>
      <Booking_main data/>
      <Footer/>
    </>
  );
};

export default Booking;