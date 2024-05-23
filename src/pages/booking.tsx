import React from "react";

import { All_footer } from "../components/all-footer";
import { Booking_main } from "../components/booking-main";
import { Booking_header } from "../components/booking-header";

const Booking = () => {
  return (
    <>
      <Booking_header/>
      <Booking_main data/>
      <All_footer/>
    </>
  );
};

export default Booking;