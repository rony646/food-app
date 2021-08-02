import React, { useState } from 'react';

import { Meal } from '../../models/meal';
import { meals } from '../../data/meals';
import { Entypo } from '@expo/vector-icons'; 
import { 
    Container, 
    Title, 
    InfoContainer, 
    InfoTitle, 
    InfoText,
    CustomButton
} from './styles';

import { 
    View, 
    TouchableNativeFeedback, 
    Text 
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';



interface CartItemProps {
    title: string,
    price: number,
    quantity: number,
    id: string
}

const CartItem: React.FC<CartItemProps> = ({ title, price, quantity, id }) => {

    const cartItems = useAppSelector((state) => state.items);

    const dispatch = useAppDispatch();

    const selectedItem = meals.find(item => item.id === id) ? meals.find(item => item.id === id) : {} as Meal;

    const [itemQuant, setItemQuant] = useState<number>(quantity);

    const addItemHandler = () => {
        dispatch({type: "ADD_ITEM", payload: selectedItem as Meal})
        setItemQuant(itemQuant + 1);
    }

    const removeItemHandler = () => {
        dispatch({type: "REMOVE_ITEM", payload: {id: id, price: price}})
        setItemQuant(itemQuant - 1);
    }

    return(
        <TouchableNativeFeedback useForeground>
            <Container>
                <Title>{title}</Title>
                <InfoContainer>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <InfoTitle>Total Item Price:</InfoTitle>
                        <InfoText>{price}$</InfoText>
                    </View>
                </InfoContainer>

                <View style={{justifyContent: "center", alignItems: "center", marginBottom: 6}}>
                    <InfoTitle>Quantity: </InfoTitle>
                </View>

                <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
                    <TouchableNativeFeedback useForeground onPress={addItemHandler}>
                        <CustomButton color="#4DEB40">
                            <Entypo name="circle-with-plus" size={34} color="#ffff" />
                        </CustomButton>
                    </TouchableNativeFeedback>

                   
                    <View>
                        <Text style={{fontSize: 32}}>{itemQuant}</Text>
                    </View>

                    <TouchableNativeFeedback useForeground onPress={removeItemHandler}>
                        <CustomButton color="#c01414">
                            <Entypo name="circle-with-minus" size={34} color="#fff" />
                        </CustomButton>
                    </TouchableNativeFeedback>
                </View>
            </Container>
        </TouchableNativeFeedback>
    )
};

export default CartItem;