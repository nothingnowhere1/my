import styled from "@emotion/styled";

export const Container1 = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
`;

export const Screen = styled.div`
    display: flex; 
    flex-direction: column; 
    width: 370px;
    height: 700px;
    max-width: 100%;
    max-height: 100%;
    background-color: #515356;
    border: 5px solid #515356;
    border-width: 50px 50px 0px 50px;
    border-radius: 20px;
    cursor: pointer;
    margin-left: 25px; 
    margin-right: 25px;
`;

export const Text = styled.div`
    font-family: "Inter", sans-serif;
    text-align: center;
    font-size: 3vh;
    margin-top: 50px;
`;

export const Textitem = styled.div`
    color: white;
    font-weight: bold;
`;

export const Textprice = styled.div`
    font-weight: bold;
    color: #adff00;
    margin-top: 20px;
    font-size: 5vh;
`;

export const Photo = styled.img`
    width: 400px;
    height: 500px;
    max-width: 100%;
    max-height: 100%; 
    border-radius: 20px;
`;
