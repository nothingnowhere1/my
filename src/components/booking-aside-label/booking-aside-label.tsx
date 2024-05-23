import React from "react";

import {
  Label,
  Input,
} from "./booking-aside-label.style"

export const Booking_aside_label = ({
  id,
  type,
  sample,
  pattern,
  text,
}) => (
  <>
      <Label htmlFor={id}>{text}</Label>
        <Input
          type={type}
          id={id}
          name={id}
          pattern={pattern}
          placeholder={sample}
          required
        />
  </>
)

Booking_aside_label.defaultProps = {
  pattern: void 0
};