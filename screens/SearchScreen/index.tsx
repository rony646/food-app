import React from 'react';

import { Container } from './styles';
import SearchBar from '../../components/SearchBar/SearchBar';

const SearchScreen: React.FC = () => {

    return(
        <Container>
            <SearchBar 
                showSofInputOnFocus
                autoFocus
            />
        </Container>
    )
};

export default SearchScreen;
