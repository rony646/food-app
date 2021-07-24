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
import { TouchableNativeFeedback, View, ViewPropTypes } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

interface SearchMealCardProps {
    title: string;
    price: number;
    imageUrl: string;
}

const SearchMealCard: React.FC<SearchMealCardProps> = ({ title, price, imageUrl }) => {
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