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
import { TouchableNativeFeedback, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

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

            <TouchableNativeFeedback useForeground>
                <Card>
                    <Title>{title}</Title>
                    <Price>{price}$</Price>
                    <View style={{width: '70%', display: 'flex', alignItems: 'center'}}>
                        <TouchableNativeFeedback useForeground>
                            <ButtonContainer>
                                <Entypo name="shopping-cart" size={26} color="#ffff" />
                                <ButtonText>Add to Cart</ButtonText>
                            </ButtonContainer>
                        </TouchableNativeFeedback>
                    </View>
                </Card>
            </TouchableNativeFeedback>
            
        </CardContainer>

    )
};

export default MealCard;