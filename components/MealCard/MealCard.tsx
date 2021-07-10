import React from 'react';

import { 
    CardContainer, 
    ImageContainer, 
    Card, 
    Title, 
    Price,
    Image
} from './styles';
import { TouchableNativeFeedback } from 'react-native';

const MealCard: React.FC = () => {
    return(
        <CardContainer>
            <ImageContainer>
                <Image
                    source={{
                        uri: 'https://hostessatheart.com/wp-content/uploads/2018/01/Blackened-Shrimp-1200x900-Landscape-Image-1-1024x768.png',
                    }}
                />
            </ImageContainer>

            <TouchableNativeFeedback useForeground={true}>
                <Card>
                    <Title>Meal Title</Title>
                    <Price>95.6$</Price>
                </Card>
            </TouchableNativeFeedback>
            
        </CardContainer>

    )
};

export default MealCard;