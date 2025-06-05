import React from 'react';

export const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

type CategoriesProps = {
    value: number;
    onClickCategory: (index: number) => void;
};

const Categories: React.FC<CategoriesProps> = React.memo(({ value, onClickCategory }) => {
    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName, index) => {
                    return (
                        <li
                            onClick={() => onClickCategory(index)}
                            className={value === index ? 'active' : ''}
                            key={`${categoryName}_${index}`}>
                            {categoryName}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
});

export default Categories;
