import React, { useState } from 'react';

import { 
    Container, 
    Title, 
    InfoContainer, 
    InfoCard, 
    UserPic,
    UserTextContainer,
    IconContainer,
    OptionContainer,
    ButtonContainer,
    Button,
    ButtonText
} from './stlyes';
import { RadioButton } from 'react-native-paper';
import { View, Text, TouchableNativeFeedback, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; 

const UserSettings: React.FC = () => {

    const [ checked, setChecked ] = useState('first')

    return(
        <ScrollView>
            <Container>
                <Title>My Profile</Title>

                <InfoContainer>
                    <Text style={{color: "black", fontSize: 16, paddingBottom: 10}}>
                        Information
                    </Text>

                    <InfoCard>
                        <UserPic>
                            <FontAwesome name="user-circle" size={55} color="#ec4f05dd" />
                        </UserPic>

                        <UserTextContainer>
                            <Text style={{fontWeight: "bold"}}>dosamarvis@gmail.com</Text>
                            <Text style={{textAlign: "left", fontSize: 13}}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur odio purus, 
                                ullamcorper ut lectus volutpat, cursus ullamcorper justo.
                            </Text>
                        </UserTextContainer>

                        <View>
                            <TouchableNativeFeedback useForeground>
                                <IconContainer>
                                    <MaterialIcons name="edit" size={35} color="#2c2c2c" />
                                </IconContainer>
                            </TouchableNativeFeedback>
                        </View>
                        
                    </InfoCard>
                </InfoContainer>

                <InfoContainer style={{marginTop: 95}}>
                    <Text style={{color: "black", fontSize: 16, paddingBottom: 10}}>
                        Payment Method
                    </Text>

                    <InfoCard>
                        <View>
                            <OptionContainer>
                                <RadioButton 
                                    value="first"
                                    status={ checked === "first" ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked("first")}
                                    color="#FA4A0C"
                                />
                                <FontAwesome name="credit-card-alt" size={24} color="#2c2929"  style={{marginRight: 10 , marginLeft: 10}} />
                                <Text>Card</Text>
                            </OptionContainer>
                            
                            <OptionContainer>
                                <RadioButton 
                                    value="second"
                                    status={ checked === "second" ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked("second")}
                                    color="#FA4A0C"
                                />
                                <FontAwesome name="bank" size={24} color="#2c2929"  style={{marginRight: 10 , marginLeft: 10}} />
                                <Text>Bank Account</Text>
                            </OptionContainer>
                            
                            <OptionContainer>
                                <RadioButton 
                                    value="third"
                                    status={ checked === "third" ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked("third")}
                                    color="#FA4A0C"
                                />
                                <FontAwesome name="paypal" size={24} color="#2c2929"  style={{marginRight: 10 , marginLeft: 10}} />
                                <Text>Paypal</Text>
                            </OptionContainer>
                        </View>
                    </InfoCard>
                </InfoContainer>

                <ButtonContainer useForeground>
                    <Button>
                        <ButtonText>
                            Update
                        </ButtonText>
                    </Button>
                </ButtonContainer>
            </Container>
        </ScrollView>
    )
};

export default UserSettings;