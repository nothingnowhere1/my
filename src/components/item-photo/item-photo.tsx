import React from "react";

export const Item_photo = (props) => {
    return (
        <>
            <img src={props.photo} height="600px" alt={props.altphoto} style={props.margin} srcSet={`${props.setphoto[0]} 220w, ${props.setphoto[1]} 445w, ${props.setphoto[2]} 880w`} />
        </>
    );
};