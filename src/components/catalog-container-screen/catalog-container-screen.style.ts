import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Screen = styled.div`
    position: relative;
    height: 63vh; 
    width: 326px;
    background-color: #515356;
    border: 5px solid #515356;
    border-width: 50px 35px 80px 60px;
    border-radius: 20px;
    margin-left: 60px;
    cursor:pointer;
`;

export const Text = styled.div`
    font-family: "Inter", sans-serif;
    position: relative;
    text-align: left;
    font-size: 23px;
`;

export const Textitem = styled.span`
    color: white;
    font-weight:bold
`;

export const Textprice =styled.span`
    font-weight:bold;
    color: #ADFF00;
    font-size: 28px
`;

export const Photo =styled.img`
    width: 300px; 
    height: 400px;
    position: relative;
    border-radius: 20px;
`;




