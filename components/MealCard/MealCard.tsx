import React from 'react';

import { Meal } from '../../models/meal';

import { useToast } from 'react-native-toast-notifications';
import { useAppDispatch } from '../../redux/hooks';

import { 
    CardContainer, 
    ImageContainer, 
    Card, 
    Title, 
    Price,
    Image,
    ButtonContainer,
    ButtonText,
} from './styles';
import { TouchableNativeFeedback, View, TouchableWithoutFeedback, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';

import { meals } from '../../data/meals';

type MealCardNavigationProp = StackNavigationProp<any>

interface MealCardNavigation {
    navigation: MealCardNavigationProp
}

interface MealCardProps {
    title: string;
    price: number;
    description: string;
    imageUrl: string;
    id: string
}

const MealCard: React.FC<MealCardProps & MealCardNavigation> = ({ title, price, imageUrl, description, navigation, id}) => {
    
    const dispatch = useAppDispatch();
    const toast = useToast();
    const seletectedItem = meals.find(item => item.id === id)

    if(seletectedItem === undefined) {
        throw new Error("Meal not found!")
    }

    const addItemToCart = (item: Meal) => {
        dispatch({ type: "ADD_ITEM", payload: item})
        toast.show(
            `${item.title} was added to the cart.`,
            { type: "success", placement: "bottom" }
        )
    };
    
    return(
        <TouchableWithoutFeedback>
            <CardContainer>
                <ImageContainer>
                    <Image
                        source={{
                            uri: imageUrl,
                        }}
                    />
                </ImageContainer>

                <TouchableNativeFeedback 
                    useForeground 
                    onPress={() => navigation.navigate("details", {
                        mealTitle: title,
                        mealImageUrl: imageUrl,
                        mealDescription: description
                    })}
                >
                    <Card>
                        <Title>{title}</Title>
                        <Price>{price}$</Price>
                        <View style={{width: '70%', display: 'flex', alignItems: 'center'}}>
                            <TouchableNativeFeedback 
                                useForeground 
                                onPress={() => addItemToCart(seletectedItem)}
                            >
                                <ButtonContainer>
                                    <Entypo name="shopping-cart" size={26} color="#ffff" />
                                    <ButtonText>Add to Cart</ButtonText>
                                </ButtonContainer>
                            </TouchableNativeFeedback>
                        </View>
                        </Card>
                </TouchableNativeFeedback>
            </CardContainer>
        </TouchableWithoutFeedback>
    )
};

export default MealCard;