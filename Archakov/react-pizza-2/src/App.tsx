import React, { Suspense } from 'react';
import './App.css';
import './scss/app.scss';
import { Routes, Route } from 'react-router-dom';

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */'./pages/Cart'));
const MainLayout = React.lazy(() => import(/* webpackChunkName: "MainLayout" */'./layouts/MainLayout'));
const Home = React.lazy(() => import(/* webpackChunkName: "Home" */'./pages/Home'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */'./pages/NotFound'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */'./pages/FullPizza'));

const Loading = () => {
    return <div>Loading...</div>;
}

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense fallback={<Loading />}>
                        <MainLayout />
                    </Suspense>
                }>
                <Route
                    index
                    element={
                        <Suspense fallback={<Loading />}>
                            <Home />
                        </Suspense>
                    }
                />
                <Route
                    path="/cart"
                    element={
                        <Suspense fallback={<Loading />}>
                            <Cart />
                        </Suspense>
                    }
                />
                <Route
                    path="/pizza/:id"
                    element={
                        <Suspense fallback={<Loading />}>
                            <FullPizza />
                        </Suspense>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<Loading />}>
                            <NotFound />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;