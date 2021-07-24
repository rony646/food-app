import React, { useState } from 'react';

// Components
import { Container, ResultsList } from './styles';
import SearchMealCard from '../../components/SearchMealCard/SearchMealCard';
import SearchBar from '../../components/SearchBar/SearchBar';

// Types
import { Meal } from '../../models/meal';

// Data
import { meals } from '../../data/meals';

const SearchScreen: React.FC = () => {

    const [ filteredMeals, setFilteredMeals ] = useState<Meal[]>(meals);

    const renderMealCard = (item: Meal) => (
        <SearchMealCard
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
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
