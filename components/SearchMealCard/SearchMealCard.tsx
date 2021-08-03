import React from 'react';

import { useAppDispatch } from '../../redux/hooks';
import { useToast } from 'react-native-toast-notifications';

import { meals } from '../../data/meals';
import { Meal } from '../../models/meal';

import { 
    CardContainer, 
    ImageContainer, 
    Card, 
    Title, 
    Price,
    Image,
    ButtonContainer,
    ButtonText
} from './styles';
import { TouchableNativeFeedback, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons'; 

type MealCardNavigationProp = StackNavigationProp<any>

interface MealCardNavigation {
    navigation: MealCardNavigationProp
}


interface SearchMealCardProps {
    title: string;
    price: number;
    imageUrl: string;
    description: string;
    id: string;
}

const SearchMealCard: React.FC<SearchMealCardProps & MealCardNavigation> = ({ title, price, imageUrl, description ,navigation, id }) => {

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
                    mealDescription: description,
                    meal: seletectedItem
                })}
            >
                <Card>
                    <Title>{title}</Title>
                    <Price>{price}$</Price>
                    <View style={{width: '70%', display: 'flex', alignItems: 'center'}}>
                        <TouchableNativeFeedback useForeground onPress={() => addItemToCart(seletectedItem)}>
                            <ButtonContainer>
                                <Entypo name="shopping-cart" size={20} color="#ffff" />
                                <ButtonText>Add to Cart</ButtonText>
                            </ButtonContainer>
                        </TouchableNativeFeedback>
                    </View>
                </Card>
            </TouchableNativeFeedback>
            
        </CardContainer>

    )
};

export default SearchMealCard;