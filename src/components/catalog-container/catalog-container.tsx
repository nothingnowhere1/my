import React from "react";

import { Catalog_container_screen } from "../catalog-container-screen";
import { Container1 } from "./catalog-container.style";

export const Catalog_container= ({props}) =>(
    <Container1>
        {props.map((item, index) => (
            <Catalog_container_screen key={index} {...item} />
        ))}
    </Container1> 
)
