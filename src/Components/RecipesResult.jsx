import {
    Box,
    Divider,
    GridItem,
    Heading,
    Image,
    Link,
    SimpleGrid,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button
} from "@chakra-ui/react";
import useRecipeStore from "../../storage.js";
import Search from "./Search.jsx";
import {NavLink, Outlet, useNavigate, useParams} from "react-router-dom";
import {useDisclosure} from "@chakra-ui/icons";


const RecipesResult = () => {
    const navigate = useNavigate();
    const params = useParams();

    const ingredients = useRecipeStore(state => state.ingredients);
    const recipes = useRecipeStore(state => state.recipes);
    let {setRecipeBuffer, setRecipes, setIngredients} = useRecipeStore();

    function handlePageOpen(e) {
        const buffer = (recipes.filter((recipe) => (recipe.id === parseInt(e.target.id))));
        setRecipeBuffer(buffer);
    }

    function homeButtonHandler() {
        navigate('/recipes');
        setRecipeBuffer([]);
        setRecipes([]);
        setIngredients('');
    }

    const {isOpen, onOpen, onClose} = useDisclosure()

    return (

        <Box h={{base: '200vh', sm: '110vh'}}
             w={'100%'}
             backgroundColor={"yellow.100"}
             display={"flex"}
             flexDirection={"column"}
             alignItems={"center"}
             justifyContent={"start"}
             colorScheme={"yellow"}
             p-4>
            <Heading onClick={homeButtonHandler} colorScheme={"yellow"} my={'10px'} className="text-2xl mb-4">
                <Link to={"/recipes"}>
                    Recipe Finder
                </Link>
            </Heading>
            <Divider borderBottom={"3px solid yellow "} mb={"30px"}></Divider>
            <Search/>
            <SimpleGrid colorScheme={"yellow"} margin="4px" display={"grid"} justifyContent={"center"}
                        templateColumns="repeat(6,1fr)">
                {ingredients.length > 0 ? (recipes.map((recipe) => (
                        <GridItem onClick={onOpen} key={recipe.id} boxShadow={"xl"} borderRadius={"xl"}
                                  backgroundColor={"yellow.300"}
                                  colSpan={{base: 6, sm: 6, md: 3, lg: 2, xl: 2, "2xl": 1}} p={'14px'} px={"25px"}
                                  colorScheme={"yellow"}
                                  borderTop={"3px solid yellow"} m="10px" className="border p-4 mb-2">
                            <NavLink onClick={() => {
                                handlePageOpen({target: {id: recipe.id}})
                            }} to={`/recipes/${recipe.id}`}>
                                <Text colorScheme={"yellow"} fontWeight={'bold'} mb='10px'>{recipe.title}</Text>
                                <Image id={recipe.id} borderRadius={"xl"} src={recipe.image} alt={recipe.title}/>
                            </NavLink>
                        </GridItem>))) :<GridItem colSpan={6}>
                    <Box w={'100%'} h={'50vh'} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Text bgColor={"yellow.400"} p={"25px"} m={"25px"} borderRadius={"xl"}>There are no recipes
                            yet😒</Text></Box></GridItem>}

            </SimpleGrid>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay/>
                <ModalContent borderRadius={'5%'} bg={'yellow.200'}>
                    <ModalHeader></ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <Outlet/>
                    </ModalBody>
                    <ModalFooter>
                        <Button bg={'yellow.400'} onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default RecipesResult;