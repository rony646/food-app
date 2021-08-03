import React from 'react';

import { Container, Title, InfoContainer, InfoCard } from './stlyes';
import { View, Text } from 'react-native';

const UserSettings: React.FC = () => {
    return(
        <Container>
            <Title>My Profile</Title>

            <InfoContainer>
                <Text style={{color: "black", fontSize: 16, paddingBottom: 10}}>
                    Information
                </Text>
                <InfoCard>
                    <Text>Information</Text>
                </InfoCard>
            </InfoContainer>
        </Container>
    )
};

export default UserSettings;