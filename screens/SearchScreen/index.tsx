import React, { useState } from 'react';

// Components
import { Container, ResultsList } from './styles';
import SearchMealCard from '../../components/SearchMealCard/SearchMealCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { StackNavigationProp } from '@react-navigation/stack';

// Types
import { Meal } from '../../models/meal';

// Data
import { meals } from '../../data/meals';

type SearchScreenNavigationProp = StackNavigationProp<any>

interface SearchProps {
    navigation: SearchScreenNavigationProp
}

const SearchScreen: React.FC<SearchProps> = ({ navigation }) => {

    const [ filteredMeals, setFilteredMeals ] = useState<Meal[]>(meals);

    const renderMealCard = (item: Meal) => (
        <SearchMealCard
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            description={item.description}
            navigation={navigation}
        />
    );

    const ChangeInputHandler = (value: string) => {
        const foundMeals = meals.filter(item => {
           return item.title.indexOf(value) > -1
        })
        setFilteredMeals(foundMeals);
    };

    return(
        <Container>
            <SearchBar 
                showSofInputOnFocus
                autoFocus
                onChange={ChangeInputHandler}
            />

            <ResultsList
                data={filteredMeals}
                renderItem={(item: any) => renderMealCard(item.item)} 
                keyExtractor={(item: any) => item.id}
                numColumns={2}
                contentContainerStyle={{alignItems: 'center'}}
            />

        </Container>
    )
};

export default SearchScreen;
