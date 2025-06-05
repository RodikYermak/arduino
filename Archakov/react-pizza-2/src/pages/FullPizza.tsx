import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const FullPizza: React.FC = () => {
    const [pizza, setPizza] = React.useState<{
        imageUrl: string;
        title: string;
        price: number;
    }>({
        imageUrl: '',
        title: '',
        price: 0,
    });

    const { id } = useParams();
    const navigate = useNavigate();

    React.useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(
                    `https://65dd02b5e7edadead7ed4cb6.mockapi.io/items/${id}`
                );
                setPizza(data);
            } catch (error) {
                alert('Ошибка при запросе данных');
                navigate('/');
            }
        }
        fetchData();
    }, [id]);

    if (!pizza) {
        return <>Загрузка...</>;
    }

    return (
        <div className="container">
            <img src={pizza.imageUrl} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <h4>{pizza.price} ₽</h4>
            <Link to="/">
                <button className="button button--outline button--add">Назад</button>
            </Link>
        </div>
    );
};

export default FullPizza;
