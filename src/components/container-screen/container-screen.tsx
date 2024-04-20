import React from "react";


export const Container_screen = (props) => {
    return (
        <>
            <div className="screen">
                <img className="photo" src={props.photo}  alt={props.alt} 
                        srcSet={`${props.setphoto[0]} 220w, ${props.setphoto[1]} 445w, ${props.setphoto[2]} 880w`}/>
                <div className="text">    
                    <span className = "textitem"><br />{props.name}</span>
                    <span className = "textprice"><br />{props.price}</span>
                </div>
            </div>
        </>
    )
}