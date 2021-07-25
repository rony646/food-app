import React from 'react';

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

    const { mealTitle, mealImageUrl, mealDescription } = route.params

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
            <ButtonContainer useForeground>
                <Button>
                    <ButtonText>Add to Cart</ButtonText>
                </Button>
            </ButtonContainer>
        </Container>
    )
};

export default MealDetails;