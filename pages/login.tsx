import {NextPage} from "next";
import Container from "@mui/material/Container";
import LoginForm from "../src/components/Login/LoginForm";
import Typography from "@mui/material/Typography";
import Link from "../src/components/Link";
import {SIGNUP_PAGE} from "../src/constants/urls";

const Login: NextPage = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h3" component="h1" mt={2} textAlign={"center"}>Login</Typography>
            <Typography variant="subtitle1" mt={2} textAlign={"center"}>Y continua mejorando el mundo</Typography>
            <LoginForm></LoginForm>
                <Typography variant="body1" mt={2} textAlign={"center"}>
                    Eres nuevo por aqui? <Link href={SIGNUP_PAGE}>Hazte una cuenta!</Link>
                </Typography>
        </Container>
    );
}

export default Login;


