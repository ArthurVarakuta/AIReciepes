import {StrictMode, lazy, Suspense} from 'react'
import {createRoot} from 'react-dom/client'

import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./Components/404.jsx";
import ListOfIngredients from "./Components/ListOfIngredients.jsx";
import {ChakraProvider, Container, Spinner, Text} from "@chakra-ui/react";

const RecipesResult = lazy(() => import("./Components/RecipesResult.jsx"));

const router = createBrowserRouter([
    {
        path: "/recipes",
        element: <RecipesResult/>,
        errorElement: <ErrorPage/>, 
        index:<RecipesResult/>,
        children: [
            {
                path: '/recipes/:recipeId',
                element: <ListOfIngredients/>,
                errorElement: <ErrorPage/>
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ChakraProvider>
            <Suspense display={'flex'} justify-content={"center"} align-items={'center'} h={'100vh'} font-size={'24px'} fallback={<Container>
                <Spinner size={'xl'}/>
                <Text>Loading ...</Text>
            </Container>}>
                <RouterProvider router={router}/>
            </Suspense>
        </ChakraProvider>
    </StrictMode>,
)
