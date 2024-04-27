import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Button = styled.button`
    margin-top: 30px; 
    width: 100%;
    padding: 10px;
    background-color: var(--primary-color); 
    color: var(--background-color); 
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: var(--secondary-color);
    }
`;

