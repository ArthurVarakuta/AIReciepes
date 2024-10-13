import {create} from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],
    recipeBuffer:[],
    ingredients: '',
    loading: false,
    setIngredients: (newIngredients) => set({ingredients: newIngredients}),
    setRecipes: (newRecipes) => set({recipes: newRecipes}),
    setLoading: (isLoading) => set({loading: isLoading}),
    setRecipeBuffer:(newRecipeBuffer)=>set({recipeBuffer:newRecipeBuffer}),
}));

export default useRecipeStore;
