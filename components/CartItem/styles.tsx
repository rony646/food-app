import { ViewProps } from 'react-native';
import styled from 'styled-components/native';

interface CustomButtonProps extends ViewProps  {
    color: string;
}

export const Container = styled.View`
    background: #ffff;
    width: 80%;
    border-radius: 25px;
    elevation: 2;
    padding-top: 3%;
    height: 220px;
    margin-bottom: 30px;
    overflow: hidden;
    border: 1px solid #FA4A0C;
`

export const Title = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    color: black;
`

export const InfoContainer = styled.View`
    height: 35%;
    justify-content: space-evenly;
`

export const InfoTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #6b6868cc;
`

export const InfoText = styled.Text`
    color: #181818eb;
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
`
export const CustomButton = styled.View<CustomButtonProps>`
    background: ${props => props.color};
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    elevation: 5;
    overflow: hidden;
    height: 50px;
    width: 50px;
`