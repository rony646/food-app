import React, { useState } from 'react';

import { 
    TitleText, 
    SearchInput,
    SearchInputContainer, 
    Container,
    MenuContainer,
    MenuItem,
    MenuItemText,
    MenuLine
} from './styles';
import { Text, ScrollView, View, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Home: React.FC = () => {

    const [activeLink, setActiveLink] = useState<1 | 2 | 3 | 4>(1);

    return(
        <Container>
            <TitleText>Delicious food for you</TitleText>

            
                <SearchInputContainer >
                    <Feather 
                        name="search" 
                        size={24} 
                        color="black" 
                    />
                    <SearchInput
                        placeholder="Search" 
                    />
                </SearchInputContainer>
           
            
            <MenuContainer horizontal showsHorizontalScrollIndicator={false} bouncesZoom>
                <TouchableWithoutFeedback onPress={() => setActiveLink(1)}>
                    <MenuItem>
                        <MenuItemText active={activeLink === 1}>Foods</MenuItemText>
                        <MenuLine active={activeLink === 1}/>
                    </MenuItem>
                </TouchableWithoutFeedback>
               
               <TouchableWithoutFeedback onPress={() => setActiveLink(2)}>
                    <MenuItem>
                            <MenuItemText active={activeLink === 2}>Drinks</MenuItemText>
                            <MenuLine active={activeLink === 2}/>
                    </MenuItem>
               </TouchableWithoutFeedback>
               
               <TouchableWithoutFeedback onPress={() => setActiveLink(3)}>
                    <MenuItem>
                        <MenuItemText active={activeLink === 3}>Snacks</MenuItemText>
                        <MenuLine active={activeLink === 3}/>
                    </MenuItem>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => setActiveLink(4)}>
                    <MenuItem>
                        <MenuItemText active={activeLink === 4}>Sauces</MenuItemText>
                        <MenuLine active={activeLink === 4}/>
                    </MenuItem>
                </TouchableWithoutFeedback>
            </MenuContainer>

            <View style={{height: '50%', backgroundColor: 'red'}}><Text>Cards goes here</Text></View>
            <Text>Navigator here</Text>
           
        </Container>
    )
};

export default Home;