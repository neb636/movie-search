import * as React from 'react';
import './SearchInput.css';
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {FormEvent} from "react";
import {useMusicActions} from "../../state/music/actions";


const SearchInput = () => {
    const { querySearchTerm } = useMusicActions();
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        querySearchTerm(searchTerm);
    };

    return (
        <form className="SearchInput" onSubmit={onSubmit}>

            <input
                ref={inputRef}
                type="search"
                className="SearchInput__input"
                value={searchTerm}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
            />

            <button
                className="SearchInput__button"
                onClick={() => querySearchTerm(searchTerm)}
            >
                Search
            </button>
        </form>
    );
};

export default SearchInput;
