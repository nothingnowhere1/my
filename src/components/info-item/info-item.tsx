import React from "react";

import { Info_item_photo } from '../info-item-photo'
import { Link } from "../all-link";
import { URLs } from "../../__data__/urls";
import {
    Item1,
    Item_info,
    Item_photo1,
    Product_price,
    Product_title,
    Product_color,
    Color1,
    Color2,
    Withoutborder,
    Buttontext,
    Book_button
  } from "./info-item.style";

export const Info_item = (props) =>( 
    <>
        <Item1>
            <Item_photo1>
                <Info_item_photo photo = {props.photo[0]} altphoto = {props.alt} setphoto = {props.setphoto}/> 
                <Info_item_photo photo = {props.photo[1]} altphoto = {props.alt} setphoto = {props.setphoto} margin={{marginLeft:'20px'}}/> 
            </Item_photo1>
            <Item_info>
                <Product_title>{props.name}</Product_title>
                <Product_color>Белый</Product_color>
                <div>
                <Color1 type="submit"></Color1>
                <Color2 type="submit"></Color2>
                </div>  
                <Product_price>{props.price}</Product_price>
                <div>
                    <Withoutborder type="submit">
                        <Buttontext>{props.size[0]}</Buttontext>
                    </Withoutborder>
                    <Withoutborder type="submit">
                        <Buttontext>{props.size[1]}</Buttontext>
                    </Withoutborder>
                    <Withoutborder type="submit">
                        <Buttontext>{props.size[2]}</Buttontext>
                    </Withoutborder>
                </div>  
                <Link href = {URLs.booking} >
                    <Book_button type="submit">Купить</Book_button> 
                </Link>
            </Item_info>
        </Item1>
    </>
)