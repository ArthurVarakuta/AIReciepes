// import {Box, ChakraProvider, Divider, Heading, Link, Spinner, Text, VStack} from "@chakra-ui/react";
// import Search from "../Components/Search.jsx";
// import useRecipeStore from "../../storage.js";
// import {Outlet} from "react-router-dom";
//
// const Root = () => {
//     const {recipes, ingredients, loading, recipeBuffer} = useRecipeStore(); // Access Zustand store
//
//     return (
//         <ChakraProvider>
//             <Box
//                 h={"100vh"}
//                 backgroundColor={"yellow.100"}
//                 display={"flex"}
//                 flexDirection={"column"}
//                 alignItems={"center"}
//                 justifyContent={"start"}
//                 colorScheme={"yellow"}
//                 p-4
//             >
//                 <Heading colorScheme={"yellow"} my={'10px'} className="text-2xl mb-4">
//                     <Link to={"/"}>
//                         Recipe Finder
//                     </Link>
//                 </Heading>
//                 <Divider borderBottom={"3px solid yellow "} mb={"30px"}></Divider>
//                 <Search/>
//
//                 <main>
//                     <Outlet/>
//                 </main>
//
//
//                 {loading ? (
//                     <VStack direction='column'><Spinner size={"xl"}/><Text>Loading...</Text></VStack>
//                 ) : (
//                     (recipes.length === 0 && ingredients.length !== 0) && null
//                 )}
//
//             </Box>
//         </ChakraProvider>
//     );
// };
//
// export default Root;