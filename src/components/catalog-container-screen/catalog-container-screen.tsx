import React from "react";

import { landing } from "../../assets/images";
import {
    Screen,
    Photo,
    Text,
    Textitem,
    Textprice,
  } from "./catalog-container-screen.style";
import { URLs } from "../../_data_/urls";
import { Link } from "../all-link";

export const Container_screen = (props) => (
    <Link href={URLs.ui.itemDetail}>
        <Screen>
            <Photo src={landing[props.photo]}  alt={props.alt} 
                    srcSet={`${landing[props.setphoto[0]]} 220w, ${landing[props.setphoto[1]]} 445w, ${landing[props.setphoto[2]]} 880w`}/>
            <Text>    
                <Textitem><br />{props.name}</Textitem>
                <Textprice><br />{props.price}</Textprice>
            </Text>
        </Screen>
    </Link>
)