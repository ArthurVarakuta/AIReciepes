import {
    Container,
    Heading,
    Image,
    List, ListIcon, ListItem
} from "@chakra-ui/react";
import useRecipeStore from "../../storage.js";
import {AddIcon} from "@chakra-ui/icons";


const ListOfIngredients = () => {

    const {setRecipes, recipeBuffer,  setRecipebuffer} = useRecipeStore();
    console.log(recipeBuffer)
    return (
        <Container>
            <Heading>{recipeBuffer.title}</Heading>
            <Image src={recipeBuffer.image}></Image>
            <List>
                {recipeBuffer.map((item, index) => (
                        <ListItem key={index} boxShadow={"xl"} borderRadius={"xl"} backgroundColor={"yellow.300"}
                                   p={'14px'} px={"25px"}
                                  colorScheme={"yellow"}
                                  borderTop={"3px solid yellow"} m="10px" className="border p-4 mb-2" >
                            <ListIcon as={AddIcon} color={"green"}/>
                            {item.title}
                            <Image src={item.image} alt={item.title}/>
                        </ListItem>
                ))}

            </List>
        </Container>

    );
};

export default ListOfIngredients;