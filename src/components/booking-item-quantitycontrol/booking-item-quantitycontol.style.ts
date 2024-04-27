import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Contol = styled.div`
    display: flex;
    align-items: center;
`;

export const Button = styled.button`
    padding:  5px 15px;
    background-color: var(--primary-color); 
    color: var(--background-color); 
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 30px; 
    &:hover {
        background-color: var(--secondary-color);
    }
`;

export const Quantity = styled.span`
    padding: 5px 10px;
    color: var(--text-color); 
    background-color: transparent; 
    margin: 0 10px;
`;