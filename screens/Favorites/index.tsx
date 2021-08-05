import React from 'react';

import { Container, CustomText } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native'; 

const Favorites: React.FC = () => {
    return(
        <>
            <Text style={{marginTop: 60, textAlign: "center", fontWeight: "bold", fontSize: 15}}>Favorites</Text>
            <Container>
                <MaterialCommunityIcons name="heart-plus" size={150} color="#818181c7" />
                <CustomText>Your favorite dishes will appear here.</CustomText>
            </Container>
        </>
    )
};

export default Favorites;