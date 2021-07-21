import styled from 'styled-components/native';

interface MenuItemProps {
    active: boolean;
};

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 18%;
    height: 100%;
    width: 100%;
`

export const TitleText = styled.Text`
    align-self: flex-start;
    font-size: 35px;
    width: 60%;
    left: 12%;
    font-weight: bold;
`

export const MenuContainer = styled.ScrollView`
    margin-top: 9%;
`

export const MenuItem = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 110px;
    height: 35px;
    margin: 0 5px;
`

export const MenuItemText = styled.Text<MenuItemProps>`
    color: ${props => props.active ? '#FA4A0C' : '#9A9A9D'};
    font-size: 18px;
    box-shadow: 5px 10px black;
`
export const MenuLine = styled.View<MenuItemProps>`
    height: 3px;
    width: ${props => props.active ? '70%' : '0%'};
    background: #FA4A0C;
    elevation: 5;
    border-radius: 5px;
`
export const CardsContainer = styled.FlatList`
    margin-top: 50px;
    padding-left: 5%;
`