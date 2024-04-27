import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { pic_1x } from "../../assets/images";

export const Half_screen = styled.div`
    height: 800px; 
    background: url(${pic_1x});
    background-size: cover;
    background-repeat:no-repeat;
    background-position: center;
    border: 10px solid white;
`;

export const Text_overlay = styled.div`
    font-family: "Inter", sans-serif;
    margin-top: 285px;
    margin-left: 30px;
    text-align: left;
    font-size: 10px;
    color: white;
`;

export const Large = styled.span`
    font-weight: 800;
    font-size: 270px;
    color: #ADFF00;
`;

export const Small =styled.span`
    font-size: 70px;
    font-variant: small-caps;
    color: white;
`;




