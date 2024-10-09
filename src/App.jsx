import { useState } from 'react';
import axios from 'axios';
import { Box, Input, Button } from '@chakra-ui/react';

function App() {
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);
    const fetchRecipes = async () => {
        const apiKey = 'a3266fa69f164fc79c2159d3d55f4eb1';
        try {
            const response = await axios.get(
                `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${apiKey}`
            );
            setRecipes(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching the recipes:', error);
        }
    };

    return (
        <Box className="flex flex-col items-center p-4">
            <h1 className="text-2xl mb-4">Recipe Finder</h1>
            <Input
                placeholder="Enter your ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                className="mb-2"
            />
            <Button colorScheme="blue" onClick={fetchRecipes}>
                Find Recipes
            </Button>
            <Box className="mt-4">

                {ingredients.length > 0  ? (recipes.map((recipe) => (
                    <Box key={recipe.id} className="border p-4 mb-2">
                        <h2 className="text-xl">{recipe.title}</h2>
                        <img src={recipe.image} alt={recipe.title} />
                    </Box>))):<h1>There are no receipes yet😒</h1>}
            </Box>
        </Box>
    );
}

export default App;
