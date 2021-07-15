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

interface MealCardProps {
    title: string;
    price: number;
    imageUrl: string;
}

const MealCard: React.FC<MealCardProps> = ({ title, price, imageUrl }) => {
    return(
        <CardContainer>
            <ImageContainer>
                <Image
                    source={{
                        uri: imageUrl,
                    }}
                />
            </ImageContainer>

            <TouchableNativeFeedback useForeground={true}>
                <Card>
                    <Title>{title}</Title>
                    <Price>{price}$</Price>
                </Card>
            </TouchableNativeFeedback>
            
        </CardContainer>

    )
};

export default MealCard;