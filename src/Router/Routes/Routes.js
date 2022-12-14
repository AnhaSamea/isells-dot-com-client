import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../Pages/Authentication/Login/Login";
import Register from "../../Pages/Authentication/Register/Register";
import Blog from "../../Pages/Home/Blog/Blog";
import Categories from "../../Pages/Home/Category/Categories";
import CategoryId from "../../Pages/Home/Category/PhoneModels/CategoryId";
import Home from "../../Pages/Home/Home/Home";
import Error from "../Error/Error";
import PrivateRoute from '../PrivateRoute/PrivateRoute'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/categories/:id',
                element: <PrivateRoute>
                    <CategoryId></CategoryId>
                </PrivateRoute>,
                loader: ({ params }) =>
                    fetch(`https://isells-dot-com-server.vercel.app/categories/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },

        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])
export default router;