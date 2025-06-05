import React from 'react';
import debounce from 'lodash.debounce';
import { setSearchValue } from '../../redux/slices/filterSlice';
import { useDispatch } from 'react-redux';

import styles from './Search.module.scss';

const Search: React.FC = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('');
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onClickClear = ( ) => {
        dispatch(setSearchValue(''));
        setValue('');
        // if (inputRef.current) {
        inputRef.current?.focus();
        // }
    };

    const updateSearchValue = React.useCallback(
        debounce((str: string) => {
            dispatch(setSearchValue(str));
        }, 1000),
        []
    );

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        updateSearchValue(e.target.value);
    };

    return (
        <div className={styles.root}>
            <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" x2="16.65" y1="21" y2="16.65" />
            </svg>
            <input
                ref={inputRef}
                className={styles.input}
                placeholder="Поиск пиццы..."
                value={value}
                onChange={onChangeInput}
            />
            {value && (
                <svg
                    onClick={onClickClear}
                    className={styles.clearIcon}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                </svg>
            )}
        </div>
    );
};

export default Search;
