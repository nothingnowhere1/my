import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Header1 = styled.footer`
    position: relative;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    font-size: 1.125rem;
    line-height: 29px;
    letter-spacing: 1.3px;
    padding: 0 1rem 45px;
    transition: height .3s;
    z-index: 6
`;

export const Left_header = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Logo = styled.div`
    display: flex;
    align-items:center ;
    cursor: pointer;
`;

export const Right_header = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px; 
`;

export const Button = styled.button`
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
`;

export const Cart = styled.svg`
    position: relative;
    margin-left: 33px;
    margin-right: 20px;
    fill: #fff;
    stroke: #fff;
    width: 51px;
    height: 51px;
`;

export const Menu = styled.svg`
    fill: #fff;
    stroke: #fff;
    width: 51px;
    height: 51px;
    margin-left: 20px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: flex-end;
  width: 100%;
  max-width: 400px;
`;

export const SearchButton = styled(Button)`
  height: 40px;
  margin-left: 25px;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 20px;
  background-color: var(--primary-color); 
    color: var(--background-color); 
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: var(--secondary-color);
    }
`;