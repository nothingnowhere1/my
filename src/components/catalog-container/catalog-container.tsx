import React from "react";

import { Container_screen } from "../catalog-container-screen";
import { Container1 } from "./catalog-container.style";

export const Container= ({props}) =>(
    <Container1>
        {props.map((item, index) => (
            <Container_screen key={index} {...item} />
        ))}
    </Container1> 
)
