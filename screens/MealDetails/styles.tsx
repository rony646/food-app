import styled from 'styled-components/native';

export const Container = styled.View`
    /* background: #dad6d6; */
    flex: 1;
    align-items: center;
    margin: 0 20px;
`

export const ImageContainer = styled.View`
    height: 250px;
    width: 250px;
    border-radius: 125px;
    overflow: hidden;
    elevation: 5;
    margin-top: 60px;
`

export const Image = styled.Image`
    height: 100%;
    width: 100%;
  
`

export const Title = styled.Text`
    color: #000000a7;
    font-weight: bold;
    font-size: 32px;
    margin-top: 60px;
    text-align: center
`

export const Description = styled.Text`
    text-align: center;
    font-size: 15px;
    margin-top: 30px;
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
    width: 100%;
    border-radius: 50px;
    margin-top: 30px;
`

export const ButtonText = styled.Text`
    color: #ffff;
    font-weight: bold;
    font-size: 25px;
`