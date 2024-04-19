import React from "react";
import {shirt1_1x,shirt1_2x,shirt1_4x, shirt2_1x,shirt2_2x,shirt2_4x,shirt3_1x,shirt3_2x,shirt3_4x,shirt4_1x,shirt4_2x,shirt4_4x,shirt5_1x,shirt5_2x,shirt5_4x,shirt6_1x,shirt6_2x,shirt6_4x} from '../assets/images'
import '../pages/iteminfo.css';

class Item_screen extends React.Component{
    render(){
        return (
            <>
               <div className="screen">
                    <img className="photo" src={this.props.photo}  alt={this.props.alt} 
                            srcSet={`${this.props.setphoto[0]} 220w, ${this.props.setphoto[1]} 445w, ${this.props.setphoto[2]} 880w`}/>
                    <div className="text">    
                        <span className = "textitem"><br />{this.props.name}</span>
                        <span className = "textprice"><br />{this.props.price}</span>
                    </div>
                </div>
            </>
        )
    }
}


export class Container extends React.Component{
    constructor(props){
        super(props);
        this.container = [
            {photo: shirt2_1x,
            alt :"ФУТБОЛКА С ПРИНТОМ МОСФИЛЬМ", 
            name: "ФУТБОЛКА С ПРИНТОМ МОСФИЛЬМ", 
            price: "1500 руб.",
            setphoto: [shirt2_1x,shirt2_2x, shirt2_4x]},
            {photo: shirt3_1x,
            alt :"ХУДИ УТЕПЛЕННОЕ", 
            name: "ХУДИ УТЕПЛЕННОЕ", 
            price: "1500 руб.",
            setphoto: [shirt3_1x,shirt3_2x, shirt3_4x]},
            {photo: shirt4_1x,
            alt :"ФУТБОЛКА С ОРНАМЕНТОМ ПЕЙСЛИ", 
            name: "ФУТБОЛКА С ОРНАМЕНТОМ ПЕЙСЛИ", 
            price: "1500 руб.",
            setphoto: [shirt4_1x,shirt4_2x, shirt4_4x]}
        ];
    }
    render () {
        return (
        <>
           <section className="container">
                    <Item_screen photo = {this.container[0].photo} alt= {this.container[0].alt} name = {this.container[0].name} price ={this.container[0].price} setphoto = {this.container[0].setphoto}/>
                    <Item_screen photo = {this.container[1].photo} alt= {this.container[1].alt} name = {this.container[1].name} price ={this.container[1].price} setphoto = {this.container[1].setphoto}/>
                    <Item_screen photo = {this.container[2].photo} alt= {this.container[2].alt} name = {this.container[2].name} price ={this.container[2].price} setphoto = {this.container[2].setphoto}/>
            </section>
        </>)
    }
}