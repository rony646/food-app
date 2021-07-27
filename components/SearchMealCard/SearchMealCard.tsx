import React from 'react';

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
}

const SearchMealCard: React.FC<SearchMealCardProps & MealCardNavigation> = ({ title, price, imageUrl, description ,navigation }) => {
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
                    mealDescription: description
                })}
            >
                <Card>
                    <Title>{title}</Title>
                    <Price>{price}$</Price>
                    <View style={{width: '70%', display: 'flex', alignItems: 'center'}}>
                        <TouchableNativeFeedback useForeground>
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