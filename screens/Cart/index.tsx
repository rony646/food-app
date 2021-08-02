import React, { useState } from 'react';

import { TotalCard } from './styles';
import { ScrollView , View, Text } from 'react-native';
import { useAppSelector } from '../../redux/hooks';
import { CartItem } from '../../redux/types/commonTypes';
import { meals } from '../../data/meals';

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
   
    console.log("Total Price of items in cart: ", totalCart)

    return(
        <ScrollView>
            <View style={{display: "flex", flex: 1, justifyContent: "space-evenly", alignItems: "center"}}>
                {/* <Text>Cart Screen</Text> */}
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
            </View>
        </ScrollView>
    )
};

export default CartScreen;