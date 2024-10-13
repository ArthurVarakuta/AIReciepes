import {Box, Button, Input} from "@chakra-ui/react";
import {fetchRecipes} from "../utils/recipeAPI.js";
import useRecipeStore from "../../storage.js";

const Search = () => {

    const {ingredients, setIngredients} = useRecipeStore();

function fetchIngredients() {
 let inputValue = document.getElementById('ingredient-input').value;
 setIngredients(inputValue);
 fetchRecipes();
}

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
                id={"ingredient-input"}
                colorScheme={"yellow"}
                placeholder="Enter your ingredients"
                className="mb-2"
                w={{ base: '300px', sm: "100%" }}
                mx={"10px"}
            />
            <Button
                w={{ base: '300px', sm: "40%" }}
                mx={"10px"}
                colorScheme="yellow"
                onClick={fetchIngredients} // Call the function from recipeApi.js

            >
                Find Recipes
            </Button>
        </Box>
    );
};

export default Search;