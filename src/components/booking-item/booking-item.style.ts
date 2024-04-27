import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Item = styled.article`
    display: flex;
    align-items: flex-start; 
    margin-bottom: 20px;
`;

export const Item_image = styled.img`
    width: 300px; 
    height: 400px;
    border-radius: 20px;
    margin-left: 40px;
    margin-right: 40px;
`;

export const Item_details = styled.div`
    flex: 1; 
`;

export const Price = styled.p`
    color: var(--price-color);
    margin-bottom: 20px;
`;

export const P = styled.p`
    margin-bottom: 20px;    
`;

export const H2 = styled.h2`
    font-size: 26px;
    margin-bottom: 40px; 
    margin-top: 40px; 
`;