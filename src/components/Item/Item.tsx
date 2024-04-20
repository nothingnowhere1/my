import React from "react";
import {Item_photo} from '../Item_photo'


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

export class Item extends React.Component{
    render () {
        return (
        <>
            <article className="item">
                <div className="item-photo">
                    <Item_photo photo = {item_photo[0].photo} altphoto = {item_photo[0].alt} setphoto = {item_photo[0].setphoto}/> 
                    <Item_photo photo = {item_photo[1].photo} altphoto = {item_photo[1].alt} setphoto = {item_photo[1].setphoto} margin={{marginLeft:'20px'}}/> 
                </div>
                <div className="item-info">
                    <h1 className="product-title" >{item_info.name}</h1>
                    <h2 className="product-color">Белый</h2>
                    <div>
                    <button className="color1">  
                    </button>
                    <button className="color2">
                    </button>
                    </div>  
                    <p className="product-price">{item_info.price}</p>
                    <div className="size">
                        <button type="button" className="withoutborder">
                            <p className="buttontext">{item_info.size[0]}</p>
                        </button>
                        <button type="button" className="withoutborder">
                            <p className="buttontext">{item_info.size[1]}</p>
                        </button>
                        <button type="button" className="withoutborder">
                            <p className="buttontext">{item_info.size[2]}</p>
                        </button>
                    </div>  
                    <button type="button" className="book-button">Забронировать</button> 
                </div>
            </article>
        </>)
    }
}