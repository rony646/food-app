import React, { useState, useEffect } from 'react';

import { 
    TitleText, 
    SearchInput,
    SearchInputContainer, 
    Container,
    MenuContainer,
    MenuItem,
    MenuItemText,
    MenuLine,
    CardsContainer
} from './styles';
import { Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import MealCard from '../../components/MealCard/MealCard';

import { meals } from '../../data/meals';
import { Meal } from '../../models/meal';
import { FlatList } from 'react-native-gesture-handler';

const Home: React.FC = () => {

    const [activeLink, setActiveLink] = useState<1 | 2 | 3 | 4>(1);
    const [mealsList, setMealsList] = useState<Array<Meal>>(meals.filter(item => item.category === "food"))

    const renderMealCard = (item: Meal) => (
        <MealCard 
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
        />
    );

    return(
        <ScrollView>
            <Container>
                <TitleText>Delicious food for you</TitleText>

                    <SearchInputContainer >
                        <Feather 
                            name="search" 
                            size={24} 
                            color="black" 
                        />
                        <SearchInput
                            keyboardAppearance="light"
                            keyboardType="decimal-pad"
                            autoCorrect
                            style={{color: 'red'}}
                            placeholder="Search" 
                        />
                    </SearchInputContainer>
            
                <MenuContainer horizontal showsHorizontalScrollIndicator={false} bouncesZoom>
                    <TouchableWithoutFeedback 
                        onPress={() => {
                                setActiveLink(1)
                                setMealsList(meals.filter(item => item.category === "food"))
                            }
                        }
                    >
                        <MenuItem>
                            <MenuItemText active={activeLink === 1}>Foods</MenuItemText>
                            <MenuLine active={activeLink === 1}/>
                        </MenuItem>
                    </TouchableWithoutFeedback>
                
                <TouchableWithoutFeedback 
                    onPress={() => {
                            setActiveLink(2)
                            setMealsList(meals.filter(item => item.category === "drinks"))
                        }
                    }
                >
                        <MenuItem>
                                <MenuItemText active={activeLink === 2}>Drinks</MenuItemText>
                                <MenuLine active={activeLink === 2}/>
                        </MenuItem>
                </TouchableWithoutFeedback>
                
                <TouchableWithoutFeedback 
                    onPress={() => {
                            setActiveLink(3)
                            setMealsList(meals.filter(item => item.category === "snacks"))
                        }
                    }
                >
                        <MenuItem>
                            <MenuItemText active={activeLink === 3}>Snacks</MenuItemText>
                            <MenuLine active={activeLink === 3}/>
                        </MenuItem>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback 
                        onPress={() => {
                                setActiveLink(4)
                                setMealsList(meals.filter(item => item.category === "sauces"))
                            }
                        }
                    >
                        <MenuItem>
                            <MenuItemText active={activeLink === 4}>Sauces</MenuItemText>
                            <MenuLine active={activeLink === 4}/>
                        </MenuItem>
                    </TouchableWithoutFeedback>
                </MenuContainer>

            
                <CardsContainer 
                    data={mealsList} 
                    renderItem={(item: any) => renderMealCard(item.item)} 
                    keyExtractor={(item: any) => item.id}
                    horizontal 
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    
                />
    
            </Container>
        </ScrollView>
    )
};

export default Home;