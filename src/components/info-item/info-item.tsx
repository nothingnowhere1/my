import React from "react";

import {Info_item_photo} from '../info-item-photo'
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

const item_photo = [
    {
        photo: 'shirt1_1x',
        alt: "Фотография футболки белого цвета с цитатой из К/ф Кавказская пленница" ,
        setphoto: ['shirt1_1x','shirt1_2x', 'shirt1_4x']
    },
    {
        photo: 'shirt1_1_1x',
        alt: "Крупным планом фотография футболки белого цвета с цитатой из К/ф Кавказская пленница",
        setphoto: ['shirt1_1_1x','shirt1_1_2x','shirt1_1_4x'] 
    }
]

const item_info = { 
    name: "Футболка с принтом Мосфильм",
    price: "1500 руб",
    size: ["XS/S","M/L","XL/XLL"]
}

export const Info_item = () =>( 
    <>
        <Item1>
            <Item_photo1>
                <Info_item_photo photo = {item_photo[0].photo} altphoto = {item_photo[0].alt} setphoto = {item_photo[0].setphoto}/> 
                <Info_item_photo photo = {item_photo[1].photo} altphoto = {item_photo[1].alt} setphoto = {item_photo[1].setphoto} margin={{marginLeft:'20px'}}/> 
            </Item_photo1>
            <Item_info>
                <Product_title>{item_info.name}</Product_title>
                <Product_color>Белый</Product_color>
                <div>
                <Color1 type="submit"></Color1>
                <Color2 type="submit"></Color2>
                </div>  
                <Product_price>{item_info.price}</Product_price>
                <div>
                    <Withoutborder type="submit">
                        <Buttontext>{item_info.size[0]}</Buttontext>
                    </Withoutborder>
                    <Withoutborder type="submit">
                        <Buttontext>{item_info.size[1]}</Buttontext>
                    </Withoutborder>
                    <Withoutborder type="submit">
                        <Buttontext>{item_info.size[2]}</Buttontext>
                    </Withoutborder>
                </div>  
                <Book_button type="submit">Купить</Book_button> 
            </Item_info>
        </Item1>
    </>
)