import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RecipesResult from "./Components/RecipesResult.jsx";
import ErrorPage from "./Components/404.jsx";
import ListOfIngredients from "./Components/ListOfIngredients.jsx";
import {ChakraProvider} from "@chakra-ui/react";

const router = createBrowserRouter([
    {
        path: "/recipes",
        element: <RecipesResult/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/recipes/:recipeId',
                element: <ListOfIngredients/>,
                errorElement:<ErrorPage/>
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ChakraProvider>
       <RouterProvider router={router}/>
        </ChakraProvider>
    </StrictMode>,
)
