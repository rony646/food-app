import React, { useRef, useEffect } from 'react';

import { SearchInputContainer, SearchInput } from './styles';
import { Feather } from '@expo/vector-icons';

interface SearchBarProps {
    onFocus?(): void;
    showSofInputOnFocus: boolean;
    autoFocus?: boolean;
    onChange?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onFocus = () => console.log("focused"), showSofInputOnFocus, autoFocus = false, onChange = (value) => console.log(value) }) => {

    const searchInputRef = useRef<any>()

    useEffect(() => {
        if(autoFocus) {
            searchInputRef.current.focus()
        }
    }, [])

    return(
        <SearchInputContainer>
            <Feather 
                name="search" 
                size={24} 
                color="black" 
            />
 
            <SearchInput
                keyboardAppearance="light"
                keyboardType="default"
                autoCorrect
                placeholder="Search"
                showSoftInputOnFocus={showSofInputOnFocus}
                onFocus={onFocus}
                onChangeText={(text: string) => onChange(text)}
                ref={searchInputRef}
            />    
        </SearchInputContainer>
    )
};

export default SearchBar;