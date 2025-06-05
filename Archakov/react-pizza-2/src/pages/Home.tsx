import React from 'react';

import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import Pagination from '../components/Pagination';
import Categories from '../components/Categories';
import Sort, { list } from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId, setPageCount, setFilters } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzasSlice';

import { categories } from '../components/Categories';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isSearch = React.useRef(false);
    const isMounted = React.useRef(false);

    const { categoryId, sort, pageCount, searchValue } = useSelector((state: any) => state.filter);
    const { items, status } = useSelector((state: any) => state.pizzas);

    const sortType = sort.sortProperty;
    const currentPage = pageCount;

    const getPizzas = async () => {
        const sortBy = sortType.replace('-', '');
        const order = sortType.includes('-') ? 'asc' : 'desc';
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        dispatch(
            // @ts-ignore
            fetchPizzas({ currentPage, category, sortBy, order, search })
        );
    };

    const onClickCategory = React.useCallback((id: number) => {
        dispatch(setCategoryId(id));
    }, []);

    const onChangePage = (number: number) => {
        dispatch(setPageCount(number));
    };

    React.useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));

            const sort = list.find((item) => item.sortProperty === params.sortProperty);

            dispatch(
                setFilters({
                    ...params,
                    sort,
                })
            );
            isSearch.current = true;
        }
    }, []);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        if (!isSearch.current) {
            getPizzas();
        }

        isSearch.current = false;
    }, [categoryId, searchValue, currentPage, sortType]);

    React.useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sortType,
                categoryId,
                currentPage,
            });

            navigate(`?${queryString}`);
        }
        isMounted.current = true;
    }, [categoryId, searchValue, currentPage, sortType]);

    const itemsEls = items.map((pizza: any) => <PizzaBlock key={pizza.id} {...pizza} />);
    const skeletons = [...Array(6)].map((_, index) => <Skeleton key={index} />);

    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory} />
                <Sort value={sort} />
            </div>
            <h2 className="content__title">{categories[categoryId]} пиццы</h2>
            {status === 'error' ? (
                <div className="content__error-info">
                    <h2>Ошибка при загрузке данных</h2>
                </div>
            ) : (
                <div className="content__items">{status === 'loading' ? skeletons : itemsEls}</div>
            )}

            <Pagination value={pageCount} onChangePage={onChangePage} />
        </div>
    );
};

export default Home;
