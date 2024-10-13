import {Box, Button, Input} from "@chakra-ui/react";
import {fetchRecipes} from "../utils/recipeAPI.js";
import useRecipeStore from "../../storage.js";

const Search = () => {

    const {ingredients, setIngredients} = useRecipeStore();


    return (
        <Box
            style={{
                colorScheme: "yellow",
                display: 'flex',
                justifyContent: 'space-around',
                marginTop: 10,
                marginBottom: 10,
            }}
            flexDirection={{ base: "column", sm: "row" }}
        >
            <Input
                colorScheme={"yellow"}
                placeholder="Enter your ingredients"
                value={ingredients} // Using Zustand store for ingredients
                onChange={(e) => setIngredients(e.target.value)} // Update Zustand store when input changes
                className="mb-2"
                w={{ base: '300px', sm: "100%" }}
                mx={"10px"}
            />
            <Button
                w={{ base: '300px', sm: "40%" }}
                mx={"10px"}
                colorScheme="yellow"
                onClick={fetchRecipes} // Call the function from recipeApi.js
            >
                Find Recipes
            </Button>
        </Box>
    );
};

export default Search;