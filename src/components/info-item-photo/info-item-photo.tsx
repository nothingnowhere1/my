import React from "react";

import { landing } from "../../assets/images";

export const Item_photo = (props) => {
    return (
        <>
            <img src={landing[props.photo]} height="600px" alt={props.altphoto} style={props.margin} srcSet={`${landing[props.setphoto[0]]} 220w, ${landing[props.setphoto[1]]} 445w, ${landing[props.setphoto[2]]} 880w`} />
        </>
    );
};