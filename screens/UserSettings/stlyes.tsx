import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`

export const InfoContainer = styled.View`
    display: flex;
    /* background: #cccc; */
    height: 180;
    width: 90%;
    margin-top: 40;
`

export const InfoCard = styled.View`
    flex-direction: row;
    height: 99%;
    border-radius: 20;
    elevation: 3;
    background: #fff;
`

export const UserPic = styled.View`
    padding-top: 30px;
    align-items: center;
    width: 32%;
`

export const UserTextContainer = styled.View`
    justify-content: space-between;
    padding: 25px 0px;
    width: 55%;
`

export const IconContainer = styled.View`
    margin-top: 17px;
    overflow: hidden;
    border-radius: 20px;
    padding: 3px;

`

export const Title = styled.Text`
    margin-top: 60;
    color: black;
    font-weight: bold;
    font-size: 15px;
`
export const OptionContainer = styled.View`
    flex-direction: row;
    align-items: center;
    padding-left: 25px;
    height: 33%;
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
    margin-top: 100px;
`

export const ButtonText = styled.Text`
    color: #ffff;
    font-weight: bold;
    font-size: 25px;
`