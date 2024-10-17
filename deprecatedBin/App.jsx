// import RecipesResult from "./Components/RecipesResult.jsx";
// import {
//     createBrowserRouter, createRoutesFromElements,
//     Route, RouterProvider,
// } from "react-router-dom";
//
// import Root from "./routes/Root.jsx";
// import useRecipeStore from "../storage.js";
//
//
//
// function App() {
//  const {recipeBuffer, setRecipeBuffer} = useRecipeStore();
//     const router = createBrowserRouter(
//         createRoutesFromElements(
//             <Route path={'/'} element={<Root/>}>
//                 <Route index element={<RecipesResult/>}/>
//                 {/*<Route path={`:${recipeBuffer.id}`} element={<ListOfIngredients/>}/>*/}
//                 {/*<Route path={`/641122`} element={<ListOfIngredients/>}/>*/}
//             </Route>
//         )
//     )
//
//     return (
//
//         <RouterProvider router={router}/>
//     );
// }
//
// export default App;
