import styled from 'styled-components/native';

export const TotalCard = styled.View`
    background: #ffff;
    height: 80;
    border-radius: 15;
    border: 2px solid #FA4A0C;
    align-items: center;
    justify-content: center;
    width: 80%;
`

export const ButtonContainer = styled.TouchableNativeFeedback`
    /* overflow: hidden; */
`

export const Button = styled.View`
    overflow: hidden;
    background: #FA4A0C;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 80%;
    border-radius: 50px;
    margin-top: 30px;
    margin-bottom: 20px;
`

export const ButtonText = styled.Text`
    color: #ffff;
    font-weight: bold;
    font-size: 25px;
`