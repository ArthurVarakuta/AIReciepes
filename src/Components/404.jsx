import {Button, Container, Text} from '@chakra-ui/react'
import {NavLink} from "react-router-dom";

const ErrorPage
    = () => {
    return (
        <Container fontFamily={'mono'} minW={'100%'} minH={'100vh'} color={'yellow.200'} backgroundColor={'yellow.700'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={'1500%'}>404</Text>
            <Text fontSize={'200%'}>OOOOOOOOPSIE DAISY</Text>
            <Button backgroundColor={'yellow.300'} color={'yellow.900'}> <NavLink to={'/recipes'}> Fuck go back</NavLink></Button>
        </Container>
    );
};

export default ErrorPage;