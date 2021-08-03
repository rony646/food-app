import React, { useState } from 'react';

import { 
    TotalCard, 
    ButtonContainer, 
    Button, 
    ButtonText 
} from './styles';
import { ScrollView , View, Text } from 'react-native';
import { useAppSelector } from '../../redux/hooks';
import { CartItem } from '../../redux/types/commonTypes';

import CartShowItem from '../../components/CartItem/CartItem';
const CartScreen: React.FC = () => {

    const cartItems = useAppSelector((state) => state.items);
    const totalItemsPrice = useAppSelector((state) => state.total)

    let totalCart: number;

    if(cartItems.length === 0) {
        totalCart = 0
    } else {
        totalCart = cartItems.map(meal => meal.price).reduce((prevItemPrice: number, currItemPrice: number) => {
            return prevItemPrice + currItemPrice
        })
    }

    return(
        <ScrollView>
            <View style={{display: "flex", flex: 1, justifyContent: "space-evenly", alignItems: "center"}}>
                {cartItems.map((meal: CartItem) => {
                    if(meal.quantity === 0) {
                        return;
                    } else {
                        return(
                            <CartShowItem
                                title={meal.title}
                                price={meal.price}
                                quantity={meal.quantity}
                                id={meal.id}
                                key={meal.id}
                            />
                        )
                    }
                })}

                <TotalCard>
                    <Text style={{color: "#646464", fontWeight: "bold", fontSize: 21}}>Order Total: </Text>
                    <Text style={{color: "black", fontWeight: "bold", fontSize: 25}}>
                       {totalItemsPrice.toFixed(2)}$
                    </Text>
                </TotalCard>

                {totalItemsPrice > 0 ? 
                    <ButtonContainer useForeground>
                        <Button>
                            <ButtonText>Finish your Order</ButtonText>
                        </Button>
                    </ButtonContainer> : null
                }
            </View>
        </ScrollView>
    )
};

export default CartScreen;