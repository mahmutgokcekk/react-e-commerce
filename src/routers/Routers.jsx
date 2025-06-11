import { Route, Routes } from 'react-router';
import SiteLayout from '../layouts/SiteLayout/SiteLayout';
import HomePage from '../pages/HomePage/HomePage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';
import BasketPage from '../pages/BasketPage/BasketPage';
import CategoryPage from '../pages/CategoryPage/CategoryPage';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';
import AuthLayout from '../layouts/AuthLayout/AuthLayout';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import LoginPage from '../pages/LogInPage/LoginPage';

function Routers() {
    return (
        <>
            <Routes>
                <Route element={<SiteLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='favorites' element={<FavoritesPage />} />
                    <Route path='basket' element={<BasketPage />} />
                    <Route path='category/:name' element={<CategoryPage />} />
                    <Route path='product-detail/:id' element={<ProductDetailPage />} />
                    <Route path='auth' element={<AuthLayout />}>
                        <Route path='sign-up' element={<SignUpPage />} />
                        <Route path='log-in' element={<LoginPage />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default Routers;