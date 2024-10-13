import {
    Container,
    Heading,
    Image,
    List, ListIcon, ListItem,
} from "@chakra-ui/react";
import useRecipeStore from "../../storage.js";
import {AddIcon} from "@chakra-ui/icons";


const ListOfIngredients = () => {

    const [recipeBuffer, setRecipeBuffer] = useRecipeStore();

    return (
        <Container>
            <Heading>{recipeBuffer.title}</Heading>
            <Image src={recipeBuffer.image}></Image>
            <List>
                {recipeBuffer.map((item, index) => (
                    <ListItem key={index}>
                        <ListIcon as={AddIcon} color={"green"}/>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default ListOfIngredients;