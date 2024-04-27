import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Item1 = styled.article`
    display: flex;
    height: 600px;
`;

export const Item_photo1 = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    margin-left: 20px;
`;

export const Item_info = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const Product_title =styled.h1`
    font-size: 30px;
    font-family: "Jost", sans-serif;
    padding: 10px 0 20px;
    color:#fff;
`;

export const Product_color =styled.h2`
    padding: 10px 0 20px;
    color:cadetblue;
`;

export const Color1 = styled.button`
    border: 4px inset white;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 50%;
    background-color: #fff;
`;

export const Color2 = styled.button`
    border: 4px inset white;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 50%;
    background-color: #000;
`;

export const Product_price = styled.p`
    font-size: 30px;
    font-family: "Jost", sans-serif;;
    padding: 10px 0 20px;
    color:crimson;
`;

export const Withoutborder = styled.button`
    background-color: #000;
    border: none;
    padding: 0px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    border-radius: 0%;
`;

export const Buttontext = styled.p`
    font-size: 120%;
    color: #fff;
    font-weight: lighter;
`;

export const Book_button = styled.button`
    margin-top: 60px; 
    width: 50%;
    padding: 20px;
    background-color: #ADFF00; 
    color: #000; 
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font:inherit;
`;


