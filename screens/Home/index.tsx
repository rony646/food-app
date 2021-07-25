import React, { useState } from 'react';

import { StackNavigationProp } from '@react-navigation/stack';
import { 
    TitleText,
    Container,
    MenuContainer,
    MenuItem,
    MenuItemText,
    MenuLine,
    CardsContainer
} from './styles';
import { ScrollView, TouchableWithoutFeedback } from 'react-native';
import MealCard from '../../components/MealCard/MealCard';
import SearchBar from '../../components/SearchBar/SearchBar';

import { meals } from '../../data/meals';
import { Meal } from '../../models/meal';

type HomeScreenNavigationProp = StackNavigationProp<any>

interface HomeProps {
    navigation: HomeScreenNavigationProp
}

const Home: React.FC<HomeProps> = ({ navigation }) => {

    const [activeLink, setActiveLink] = useState<1 | 2 | 3 | 4>(1);
    const [mealsList, setMealsList] = useState<Array<Meal>>(meals.filter(item => item.category === "food"))

    const renderMealCard = (item: Meal) => (
        <MealCard 
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            description={item.description}
            navigation={navigation}
        />
    );

    return(
        <ScrollView>
            <Container>
                <TitleText>Delicious food for you</TitleText>
                    
                <SearchBar 
                    onFocus={() => navigation.navigate("search")}
                    showSofInputOnFocus={false}
                />
            
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