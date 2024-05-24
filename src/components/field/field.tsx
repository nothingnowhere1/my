import React from "react";

import { FieldInput, FieldWrapper } from "./field.style";

export const InputField = ({ id, placeHolder, value, onChange, inputRef }) => {
  return (
    <FieldWrapper>
      <FieldInput ref={inputRef} id={id} type="text" placeholder={placeHolder} value={value} onChange={onChange} />
    </FieldWrapper>
  );
};

InputField.defaultProps = {
  id: `input-${(Math.random() * 10).toString()}`,
};
