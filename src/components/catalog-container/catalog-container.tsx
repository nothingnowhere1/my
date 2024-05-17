import React from "react";

import { Container_screen } from "../catalog-container-screen";
import { Container1 } from "./catalog-container.style";

export const Container= ({props}) =>(
    <Container1>
            <Container_screen photo = {props[0].photo} alt= {props[0].alt} name = {props[0].name} price ={props[0].price} setphoto = {props[0].setphoto}/>
            <Container_screen photo = {props[1].photo} alt= {props[1].alt} name = {props[1].name} price ={props[1].price} setphoto = {props[1].setphoto}/>
            <Container_screen photo = {props[2].photo} alt= {props[2].alt} name = {props[2].name} price ={props[2].price} setphoto = {props[2].setphoto}/>
    </Container1> 
)