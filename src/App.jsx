import {
    Box,
    Divider,
    Text,
    Heading,
    VStack,
    Spinner
} from '@chakra-ui/react';
import {ChakraProvider} from '@chakra-ui/react';
import RecipesResult from "./Components/RecipesResult.jsx";
import useRecipeStore from '../storage.js'; // Import the Zustand store
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Search from "./Components/Search.jsx";
import ErrorPage from "./error-page.jsx";
import ListOfIngredients from "./Components/ListOfIngredients.jsx";

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <RecipesResult></RecipesResult>,
//         errorElement:<ErrorPage></ErrorPage>,
//     }
// ])

function App() {
    const {recipes, ingredients, loading} = useRecipeStore(); // Access Zustand store

    return (
        <ChakraProvider>
            <Box
                h={"100vh"}
                backgroundColor={"yellow.100"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"start"}
                colorScheme={"yellow"}
                p-4
            >
                <Heading colorScheme={"yellow"} my={'10px'} className="text-2xl mb-4">
                    Recipe Finder
                </Heading>
                <Divider borderBottom={"3px solid yellow "} mb={"30px"}></Divider>
                <Search/>


                {/*<RouterProvider router={router}/>*/}
                <BrowserRouter>
                    <main>
                        <Routes>
                            <Route path={'/'} element={<RecipesResult/>}/>
                            <Route path={"/:recipeBuffer.title"} element={<ListOfIngredients/>}/>
                        </Routes>
                    </main>
                </BrowserRouter>

                {loading ? (
                    <VStack direction='column'><Spinner size={"xl"}/><Text>Loading...</Text></VStack>
                ) : (
                    (recipes.length === 0 && ingredients.length !== 0) && null
                )}
            </Box>
        </ChakraProvider>
    );
}

export default App;
