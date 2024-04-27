import React from "react";

import {
    Half_screen,
    Text_overlay,
    Large,
    Small,
  } from "./catalog-herosection.style";

export const Hero_section = (props) => {
    return (
        <>
            <Half_screen >
                <Text_overlay>    
                    <Large>SALE<br /> </Large>
                    <Small>For new collection</Small>
                </Text_overlay>
            </Half_screen>
        </>
    )
}