import React from 'react';

import { useToast } from 'react-native-toast-notifications';
import { useAppDispatch } from '../../redux/hooks';
import { 
    Container, 
    ImageContainer, 
    Image, 
    Title,
    Description,
    ButtonContainer,
    Button,
    ButtonText
} from './styles';

import { StackNavigationProp } from '@react-navigation/stack';

type MealDetailNavigationProp = StackNavigationProp<any>

interface MealDetailsProps {
    navigation: MealDetailNavigationProp,
    route: any
}

const MealDetails: React.FC<MealDetailsProps> = ({ navigation, route }) => {

    const dispatch = useAppDispatch();
    
    const toast = useToast();

    const { mealTitle, mealImageUrl, mealDescription, meal } = route.params;

    const addItemToCartHandler = () => {
        dispatch({type: "ADD_ITEM", payload: meal});
        toast.show(`${meal.title} was added to cart!`, { type: "success" })
    }

    return(
        <Container>
            <ImageContainer>
                <Image
                    source={{
                        uri: mealImageUrl
                    }}
                />
            </ImageContainer>

            <Title>{mealTitle}</Title>
            <Description>{mealDescription}</Description>
            <ButtonContainer useForeground onPress={addItemToCartHandler}>
                <Button>
                    <ButtonText>Add to Cart</ButtonText>
                </Button>
            </ButtonContainer>
        </Container>
    )
};

export default MealDetails;