import styled from 'styled-components/native';

export const CardContainer = styled.View`
    height: 320px;
    width: 180px;
    margin-right: 20px;
    border-radius: 30px;
    overflow: visible;
`
export const ImageContainer = styled.View`
    z-index: 2;
    bottom: -10px;
    /* background: #ccc; */
    height: 35%;
    width: 60%;
    border-radius: 170px;
    overflow: hidden;
    margin: 0 auto;
    elevation: 10;
`

export const Card = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 30px;
    position: absolute;
    bottom: 0;
    background: #fff;
    height: 80%;
    width: 100%;
    border-radius: 30px;
    overflow: hidden;
    border: 0.45px solid #FA4A0C;

`

export const ButtonContainer = styled.View`
    /* margin-top: 20px; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background: #f74a0b;
    height: 50px;
    width: 100%;
    border-radius: 10px;
    margin-top: 10px;
    overflow: hidden;
    elevation: 3
`

export const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 13px;
`

export const Title = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 13px;
    margin-bottom: 18px;
`

export const Price = styled.Text`
    font-weight: bold;
    color: #FA4A0C;
    font-size: 20px;
`

export const Image = styled.Image`
    height: 100%;
    width: 100%;
`