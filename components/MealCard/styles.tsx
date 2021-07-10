import styled from 'styled-components/native';

export const CardContainer = styled.View`
    height: 370px;
    width: 230px;
    margin-right: 20px;
    border-radius: 30px;
    overflow: visible;
`
export const ImageContainer = styled.View`
    z-index: 2;
    bottom: -10px;
    /* background: #ccc; */
    height: 170px;
    width: 170px;
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
    padding-bottom: 65px;
    position: absolute;
    bottom: 0;
    background: #fff;
    height: 80%;
    width: 100%;
    border-radius: 30px;
    overflow: hidden;

`

export const Title = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 23px;
`

export const Price = styled.Text`
    font-weight: bold;
    color: #FA4A0C;
    font-size: 22px;
`

export const Image = styled.Image`
    height: 100%;
    width: 100%;
`