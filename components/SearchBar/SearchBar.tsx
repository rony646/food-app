import React from 'react';

import { SearchInputContainer, SearchInput } from './styles';
import { Feather } from '@expo/vector-icons';

interface SearchBarProps {
    onFocus?(): void; 
}

const SearchBar: React.FC<SearchBarProps> = ({onFocus = () => console.log("focused")}) => {
    return(
        <SearchInputContainer>
            <Feather 
                name="search" 
                size={24} 
                color="black" 
            />
 
            <SearchInput
                keyboardAppearance="light"
                keyboardType="decimal-pad"
                autoCorrect
                placeholder="Search"
                showSoftInputOnFocus={false}
                onFocus={onFocus}
            />    
        </SearchInputContainer>
    )
};

export default SearchBar;