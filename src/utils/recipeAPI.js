import axios from 'axios';
import useRecipeStore from '../../storage.js'; // Import the Zustand store

export const fetchRecipes = async () => {
    const { ingredients, setRecipes, setLoading } = useRecipeStore.getState(); // Access Zustand store directly
    const apiKey = 'a3266fa69f164fc79c2159d3d55f4eb1';

    setLoading(true); // Set loading to true
    try {
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${apiKey}`
        );
        setRecipes(response.data); // Update the Zustand store with fetched recipes
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching the recipes:', error);
    } finally {
        setLoading(false); // Set loading to false once the fetch is complete
    }
};
