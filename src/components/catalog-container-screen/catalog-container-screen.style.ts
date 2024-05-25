import styled from "@emotion/styled";

export const Container1 = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
`;

export const Screen = styled.div`
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    width: 370px;
    height: 80%;
    max-width: 100%;
    max-height: 100%;
    background-color: #515356;
    border: 5px solid #515356;
    border-width: 40px 50px 70px 50px;
    border-radius: 20px;
    cursor: pointer;
    margin-left: 25px; 
    margin-right: 25px;
`;

export const Text = styled.div`
    font-family: "Inter", sans-serif;
    text-align: center;
    font-size: 3vh;
`;

export const Textitem = styled.span`
    color: white;
    font-weight: bold;
`;

export const Textprice = styled.span`
    font-weight: bold;
    color: #adff00;
    font-size: 5vh;
`;

export const Photo = styled.img`
    width: 100%;
    height: 80%;
    max-width: 100%;
    max-height: 100%; 
    border-radius: 20px;
`;
