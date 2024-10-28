import {create} from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],
    recipeBuffer:[],
    ingredients: '',
    loading: false,
    loggedIn: false,
    setLoggedIn: (isLoggedIn) => set({loggedIn: isLoggedIn}),
    setIngredients: (newIngredients) => set({ingredients: newIngredients}),
    setRecipes: (newRecipes) => set({recipes: newRecipes}),
    setLoading: (isLoading) => set({loading: isLoading}),
    setRecipeBuffer:(newRecipeBuffer)=>set({recipeBuffer:newRecipeBuffer}),
}));

export default useRecipeStore;
