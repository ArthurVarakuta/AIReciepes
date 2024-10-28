import {
    Container, Divider,
    Heading, Text,
    Image,
    List, ListIcon, ListItem, OrderedList
} from "@chakra-ui/react";
import useRecipeStore from "../../storage.js";
import {AddIcon} from "@chakra-ui/icons";


const ListOfIngredients = () => {

    const {setRecipes, recipeBuffer,  setRecipebuffer,recipes} = useRecipeStore();
    console.log(recipeBuffer);

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
                            <ListIcon   as={AddIcon} color={"green"}/>
                            {item.title}
                            <Image my={'10px'} src={item.image} alt={item.title}/>
                            <Divider/>
                            <OrderedList>
                            {item.usedIngredients.map((item, index) => (
                                <ListItem p={'5px'} fontWeight={'bold'} key={index}> {item.original} </ListItem>
                            ))}
                            {item.unusedIngredients.map((item, index) => (
                                <ListItem p={'5px'} fontWeight={'bold'} key={index}> {item.original} </ListItem>
                            ))}
                            {item.missedIngredients.map((item, index) => (
                                <ListItem p={'5px'} fontWeight={'bold'} key={index}> {item.original} </ListItem>
                            ))}
                            </OrderedList>
                        </ListItem>
                ))}

            </List>
        </Container>

    );
};

export default ListOfIngredients;