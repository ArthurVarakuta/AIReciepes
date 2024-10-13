import {GridItem, Image, SimpleGrid, Text} from "@chakra-ui/react";
import useRecipeStore from "../../storage.js";

const RecipesResult = () => {



    const ingredients = useRecipeStore(state => state.ingredients);
    const recipes = useRecipeStore(state => state.recipes);
    const {recipeBuffer, setRecipeBuffer} = useRecipeStore();

    function handlePageOpen(e) {
        const updateValue = (recipes.filter((recipe) => (recipe.title.toLowerCase() === e.target.alt.toLowerCase())));
        setRecipeBuffer(updateValue);
        console.log(recipeBuffer)
        //here is the bug when it works only when you press it two times
    }
    return (
        <SimpleGrid colorScheme={"yellow"} margin="4px" display={"grid"} justifyContent={"center"}
                    templateColumns="repeat(6,1fr)">
            {ingredients.length > 0 ? (recipes.map((recipe) => (
                    <GridItem onClick={(e)=>{handlePageOpen(e)}} boxShadow={"xl"} borderRadius={"xl"} backgroundColor={"yellow.300"}
                              colSpan={{base: 6, sm: 6, md: 3, lg: 2, xl: 2, "2xl": 1}} p={'14px'} px={"25px"}
                              colorScheme={"yellow"}
                              borderTop={"3px solid yellow"} m="10px" key={recipe.id} className="border p-4 mb-2">
                        <Text colorScheme={"yellow"} fontWeight={'bold'} mb='10px'>{recipe.title}</Text>
                        <Image borderRadius={"xl"} src={recipe.image} alt={recipe.title}/>
                    </GridItem>))): <Text bgColor={"yellow.400"} p={"25px"} m={"25px"} borderRadius={"xl"}>There are no recipes yet😒</Text>}

        </SimpleGrid>
    );
};

export default RecipesResult;