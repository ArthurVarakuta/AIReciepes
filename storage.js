import {create} from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],
    ingredients: '',
    loading: false,
    setIngredients: (newIngredients) => set({ingredients: newIngredients}),
    setRecipes: (newRecipes) => set({recipes: newRecipes}),
    setLoading: (isLoading) => set({loading: isLoading}),
}));

export default useRecipeStore;
