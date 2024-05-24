import React from "react";

import {
  Label,
  Input,
} from "./booking-aside-label.style"

interface LabelProps {
  id: string;
  type: string;
  sample: string;
  pattern: string;
  text:string;
}

export const Booking_aside_label = (props: LabelProps) => (
  <>
      <Label htmlFor={props.id}>{props.text}</Label>
        <Input
          type={props.type}
          id={props.id}
          name={props.id}
          pattern={props.pattern}
          placeholder={props.sample}
          required
        />
  </>
)

Booking_aside_label.defaultProps = {
  pattern: void 0
};