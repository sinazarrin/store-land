import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import DefaultLayout from "./Layout/Default";

const ProductPage = lazy(() => import('./Pages/ProductPage'))
const CartPage = lazy(() => import('./Pages/CartPage'))

const Routes = () => {
    return useRoutes([
        {
            path: '/',
            element: <DefaultLayout />,
            children: [
                {
                    index: true,
                    element: <ProductPage />
                },
                {
                    path: 'cart-page',
                    element: <CartPage />
                },
            ]
        }
    ])
}

export default Routes