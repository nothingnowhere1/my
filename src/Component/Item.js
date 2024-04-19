import React from "react";
import ReactDOM from 'react-dom/client';
import {shirt1_1_1x,shirt1_1_2x,shirt1_1_4x,shirt1_1x,shirt1_2x,shirt1_4x} from '../assets/images'
import '../pages/iteminfo.css';


class Item_photo extends React.Component{
    render(){
        return (
            <>
                <img src={this.props.photo} height="600px" alt={this.props.altphoto} style={this.props.margin} srcSet={`${this.props.setphoto[0]} 220w, ${this.props.setphoto[1]} 445w, ${this.props.setphoto[2]} 880w`} />
            </>
        )
    }
}


export class Item extends React.Component{
    constructor(props){
        super(props);
        this.item_photo_1 = {
            photo: shirt1_1x,
            alt: "Фотография футболки белого цвета с цитатой из К/ф Кавказская пленница" ,
            setphoto: [shirt1_1x,shirt1_2x, shirt1_4x]
        }
        this.item_photo_2 = {
            photo: shirt1_1_1x,
            alt: "Крупным планом фотография футболки белого цвета с цитатой из К/ф Кавказская пленница",
            setphoto: [shirt1_1_1x,shirt1_1_2x,shirt1_1_4x] 
        };
        this.item_info = {
            name: "Футболка с принтом Мосфильм",
            price: "1500 руб",
            size: ["XS/S","M/L","XL/XLL"]
        };
    }
    render () {
        return (
        <>
            <article className="item">
                <div className="item-photo">
                    <Item_photo photo = {this.item_photo_1.photo} altphoto = {this.item_photo_1.alt} setphoto = {this.item_photo_1.setphoto}/> 
                    <Item_photo photo = {this.item_photo_2.photo} altphoto = {this.item_photo_2.alt} setphoto = {this.item_photo_2.setphoto} margin={{marginLeft:'20px'}}/> 
                </div>
                <div className="item-info">
                    <h1 className="product-title" >{this.item_info.name}</h1>
                    <h2 className="product-color">Белый</h2>
                    <div>
                    <button className="color1">  
                    </button>
                    <button className="color2">
                    </button>
                    </div>  
                    <p className="product-price">{this.item_info.price}</p>
                    <div className="size">
                        <button type="button" className="withoutborder">
                            <p className="buttontext">{this.item_info.size[0]}</p>
                        </button>
                        <button type="button" className="withoutborder">
                            <p className="buttontext">{this.item_info.size[1]}</p>
                        </button>
                        <button type="button" className="withoutborder">
                            <p className="buttontext">{this.item_info.size[2]}</p>
                        </button>
                    </div>  
                    <button type="button" className="book-button">Забронировать</button> 
                </div>
            </article>
        </>)
    }
}