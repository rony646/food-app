import React from 'react';

import { Container, CustomText } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Text } from 'react-native';

const OrdersHistory: React.FC = () => {
    return(
        <>
            <Text style={{marginTop: 60, textAlign: "center", fontWeight: "bold", fontSize: 15}}>Orders History</Text>
            <Container>
                <MaterialCommunityIcons name="calendar-text" size={150} color="#818181c7" />
                <CustomText>You haven't ordered anything yet.</CustomText>
            </Container>
        </>
    )
};

export default OrdersHistory;